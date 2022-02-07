function printImpar (x:number)
{
    let i = 0;

    while (i < x)
    {
        if (i%2 != 0)
        {
            console.log(i);
        }
        i++
    }
}

printImpar(8);