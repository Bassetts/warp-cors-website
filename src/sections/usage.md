---
title: Usage
order: 1
colour: viridian
---

Halvah `dragée` cookie jelly bear claw pie lollipop. Ice cream cheesecake
sesame snaps muffin. Chocolate cake tiramisu tootsie `roll sugar` plum
cotton candy cheesecake bear claw. Chocolate cake carrot cake bear claw
jelly gingerbread sugar plum ice cream. Soufflé powder powder icing.

```shell-session
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
$ # A really long command that should wrap somewhere perhaps --or --maybe-it-wont long command that should wrap somewhere perhaps --or --maybe-it-wont
```

Soufflé bonbon cupcake. Oat cake gummies candy canes candy macaroon. Candy
tootsie roll cake sugar plum. `Bear claw` brownie tiramisu croissant jujubes
dessert. Chupa chups icing wafer caramels chocolate cake. Jujubes cotton
candy caramels bear claw oat cake. Lemon drops candy canes donut jelly-o
lollipop cupcake.

Code block with no highlighting

```
function myFunction() {
  return true;
}
```

Code block with highlighting

```bash
#!/bin/bash

# This is a comment

STRING="Hello World"
'Single and
multi-line strings are supported.'
"Single and
multi-line strings are supported."
cat << EOF
Here-Documents
are also supported
EOF

echo $STRING
args=("$@")
echo ${args[0]} ${args[1]} ${args[2]}


for (( i=0;i<$ELEMENTS;i++)); do
	echo ${ARRAY[${i}]}
done
while read LINE; do
    ARRAY[$count]=$LINE
    ((count++))
done
if [ -d $directory ]; then
	echo "Directory exists"
else
	echo "Directory does not exists"
fi
```

Shell session with highlighting

```shell-session
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.
$ git push
Everything up-to-date
$ echo "Foo
> Bar"
Foo
Bar

foo@bar:/$ cd ~
foo@bar:~$ sudo -i
[sudo] password for foo:
root@bar:~# echo "hello!"
hello!
```
