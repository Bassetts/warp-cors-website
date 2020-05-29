---
title: Using locally
style: claret
order: 3
---

The code behind the proxy service is open-source and can be used locally from
your own machine or deployed to your own server. There are a number of ways this
can be achieved.

### Docker

Docker images are provided for each release and are available from
[Docker Hub](https://hub.docker.com/r/bassetts/warp-cors).

```shell-session
$ docker run -dp 3030:3030 bassetts/warp-cors
```

### Binaries

Archives containing pre-compiled binaries are available for Linux, macOS, and
Windows. These are available from
[GitHub](https://github.com/Bassetts/warp-cors/releases). Further information is
provided inside the `README.md` file within the archive.

### Cargo

Finally, Rust programmers can install the service using `cargo`.

```shell-session
$ cargo install warp-cors
$ warp-cors --help # Show usage instructions
```
