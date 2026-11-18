#!/usr/bin/perl
# Al Rayees SDN BHD — Static Dev Server (HTTP::Daemon)
use strict;
use warnings;
use HTTP::Daemon;
use HTTP::Response;
use HTTP::Status;

my $port = $ARGV[0] || 5500;
my $root = '.';

my %MIME = (
  html  => 'text/html; charset=utf-8',
  css   => 'text/css',
  js    => 'application/javascript',
  json  => 'application/json',
  png   => 'image/png',
  jpg   => 'image/jpeg',
  jpeg  => 'image/jpeg',
  gif   => 'image/gif',
  svg   => 'image/svg+xml',
  ico   => 'image/x-icon',
  woff  => 'font/woff',
  woff2 => 'font/woff2',
  ttf   => 'font/ttf',
  txt   => 'text/plain',
  xml   => 'application/xml',
);

my $d = HTTP::Daemon->new(LocalPort => $port, ReuseAddr => 1)
  or die "Cannot bind port $port: $!\n";

print "Al Rayees Dev Server running at: http://localhost:$port/\n";
print "Serving: $root\n";
print "Press Ctrl+C to stop.\n";

while (my $c = $d->accept) {
  while (my $r = $c->get_request) {
    my $url = $r->url->path;
    $url =~ s/\.\.\///g;           # strip path traversal
    my $file = $root . $url;
    $file =~ s|/+|/|g;
    $file = $root . '/index.html' if -d $file;

    if (-f $file) {
      my ($ext) = $file =~ /\.([^.]+)$/;
      my $ct = $MIME{lc($ext // '')} // 'application/octet-stream';
      open my $fh, '<:raw', $file or do { $c->send_error(RC_FORBIDDEN); next; };
      local $/; my $body = <$fh>; close $fh;
      my $res = HTTP::Response->new(RC_OK);
      $res->header('Content-Type'   => $ct);
      $res->header('Content-Length' => length($body));
      $res->header('Cache-Control'  => 'no-cache');
      $res->content($body);
      $c->send_response($res);
    } else {
      $c->send_error(RC_NOT_FOUND, "404 – Not found: $url");
    }
  }
  $c->close; undef $c;
}
