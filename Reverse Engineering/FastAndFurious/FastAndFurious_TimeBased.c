#include<stdio.h>
#include<time.h>
#include<string.h>

int main()
{
	clock_t begin = clock();
	char s[20];
	char c;
	char arr[40] = {'h','a','c','k','o','f','f','{','f','a','s','t','3','r','_','t','h','a','n','_','f','3','d','x','}','\0'};
	printf("Press Enter and then type in your password as fast as you can..\n");
	c = getchar();
	printf("Enter password:");
	clock_t end = clock();
   	if( ((end - begin)) <= 10 ){
        scanf("%s",s);
   		if(strcmp(s,"IBelieveICanFly")==0)
   			printf("%s\n",arr);
   		else
   			printf("\nHow could you possibly get that wrong\n");
   	}
   	else
   		printf("\nSorry, but you ran out of time...\n");
	return 0;
}
