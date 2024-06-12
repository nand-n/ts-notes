interface Author{
    first:string;
    last:string;
}

interface DB {
    runQuery:(sql:string) =>any[];
}

function getAuthors(database:DB):Author[]{
    const authorRows = database.runQuery(`SELECT firnst,last FROM authors`);
    return authorRows.map(row=>({first:row[0] ,last:row[1]}));
}