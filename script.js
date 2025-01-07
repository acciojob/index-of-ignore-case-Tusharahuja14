function indexOfIgnoreCase(s1, s2) {
  // write your code here
	s1=s1.toLowerCase();
	s2=s2.toLowerCase();
	let j=0;
	let st=-1;
	for(let i=0;i<s1.length)
		{
			if(s1.charAt(i)==s2.charAt(j))
			{
				st=i;
				j++;
			}
			else{
				j=0;
			}
			
		}
	return st;
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
