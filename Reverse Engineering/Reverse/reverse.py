#dont mess with the code, coz if u do, you wont get the flag ;)
lst=list("rv")
s=input("Enter Key:")
if(s==""):
	print("hmmm...interesting")
else:	
	if(len(s) == 10):
		if(s[3:7]=="_1s_"):
			if(s[1] == str(int(0x3)) and s[-2] == str(int(0b0))):
				if(s[0] == lst[0] and s[2] == lst[1]):
					if(s[7] == chr(102) and ord(s[9]) == 110):
						print("hackoff{" + s[::-1] + "}")
					else:
						print('you were nearly there')
				else:
					print('you are getting closer!')
			else:
				print('the decimal system isn\'t the only system out there')
		else:
			print('reading and patience is the key')						
	else:
		print('how could that step possibly go wrong :(')
