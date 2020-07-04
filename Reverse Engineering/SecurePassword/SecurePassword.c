#include<stdio.h>
#include<string.h>
int main()
{
	char arr[40] = {'h','a','c','k','o','f','f','{','t','h','a','t','\'','s','_','n','0','t','_','s','3','c','u','r','3','}','\0'};
	char pass[30];
	while(1)
	{
		printf("\nEnter password (\'quit\' to exit) : ");
		scanf("%s",pass);
		if(strcmp(pass,"HoustonWeHaveAProblem") == 0)
		{
			printf("%s\n",arr);
			break;
		}	
		else if(strcmp(pass,"quit") == 0)
		{
			printf("exiting...\n");
			break;
		}	
		else
			printf("You can do better than that, cant you?\n");
				
	}
}
