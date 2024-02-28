function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0;i<str.length;i++)
		{
			let count=0;
			let s=str.charAt(i);
			for(let j=0;j<str.length;j++)
				{
					if(s==str.charAt(j) && j!=i)
					{
						count++;
					}
				}
			if(count==0) 
			{
				return s;
			}
		}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
