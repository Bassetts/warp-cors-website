---
title: Usage
style: viridian
order: 1
---

Prepend your request url with `https://warp-co.rs/` to proxy your request and
add CORS headers to the response. For example;

```
https://warp-co.rs/https://example.org/
```

The proxy will respond to pre-flight requests allowing all methods and headers.
Any other requests will be forwarded to the destination and the proxy will
modify the response to allow any origin and expose all headers found in the
response.

The protocol of the url you are requesting must be either `http` or `https`.
Cookies are not supported, `Cookie` and `Set-Cookie` headers are stripped from
the request and the proxied response respectively.

If you find this service useful you can support me on
[Ko-fi](https://ko-fi.com/bassetts) or sponsor me on
[GitHub](https://github.com/sponsors/Bassetts).
