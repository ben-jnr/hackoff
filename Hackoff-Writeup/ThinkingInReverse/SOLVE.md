# ThinkingInReverse (200pts)
#### Author: [Bichu](https://github.com/ben-jnr)
## Challenge
File avaibable for download.  

`HINT : That extension doesn't feel the same`
## Solution
We are given a `reverse.pyc` file to work with. `pyc` files are python compiled files. Let's find out the version of python used. For that we use the `file` command. 

![Reverse](https://github.com/TheSkullCrushr/HackOff-CTF/raw/master/ThinkingInReverse/img/Reverse1.png)

We find out that the file uses python3 and then executed it using python3. The program now asks us for a key, and a random input returns an error message. Now it's time to decompile the file. `pyc` files can be decompiled either using online tools or using tools like `uncompyle6`. I use `uncompyle6` for the same.

![Reverse](https://github.com/TheSkullCrushr/HackOff-CTF/raw/master/ThinkingInReverse/img/Reverse2.png)

Now, the only thing we have to do is build up the key from the source code.

```python3
let key = []

if(len(s) == 10):
key has 10 alphabets, key = [ __________ ]

if(s[3:7]=="_1s_"):
substring is given, key = [ ____1s____ ]

if(s[1] == str(int(0x3)) and s[-2] == str(int(0b0))):
s[1] = 3, s[-2]=s[8]=0
key = [ _3__1s__0_ ]


if(s[0] == lst[0] and s[2] == lst[1]):
s[0] = r, s[2]=v
key = [ r3v_1s__0_ ]

if(s[7] == chr(102) and ord(s[9]) == 110):
s[7] = f, s[9]=n
key = [ r3v_1s_f0n ]

```
Now, let's use the key.

![Reverse](https://github.com/TheSkullCrushr/HackOff-CTF/raw/master/ThinkingInReverse/img/Reverse3.png)  

There is your flag!

### flag : hackoff{n0f_s1_v3r}
