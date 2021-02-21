// JavaScript source code
/*In addition to being able to use a simple configuration object ...
{
  database: "db_name",
  server: "server_name",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true
  }
}
... there is an option to pass config as a connection string. 
Two formats of connection string are supported.
 
Server=localhost,1433;Database=database;User Id=username;Password=password;Encrypt=true
Driver=msnodesqlV8;Server=(local)\INSTANCE;Database=database;UID=DOMAIN\username;PWD=password;Encrypt=true
Driver=msnodesqlv8;Server=(local)\INSTANCE;Database=database;UID=DOMAIN\username;PWD=password;Encrypt=true
or 
//mssql://username:password@localhost:1433/database?encrypt=true
//mssql://username:password@localhost/INSTANCE/database?encrypt=true&domain=DOMAIN&driver=msnodesql
//mssql://username:password@localhost/INSTANCE/database?encrypt=true&domain=DOMAIN&driver=msnodesqlv8
*/
var config = {
    production: {
        driver: 'msnodesqlv8',
        connectionString: 'Driver={SQL Server Native Client 11.0};Server=LAPTOP-MVPQSK42\DATACAMP_SQL\\sql;Database=AdventureWorks2019;UID=MyUserName;PWD=MyPassword'
    },
   // development: {
   //     driver: 'msnodesqlv8',
   //     connectionString: 'Driver=SQL Server Native Client //11.0;Server=DATACAMP_SQL;Database=AdventureWorks2019;Trusted_Connection=yes'
  //  }
    development: {
        driver: 'msnodesqlv8',
        connectionString: "Server=LAPTOP-MVPQSK42\\DATACAMP_SQL;Database=AdventureWorks2019;Trusted_Connection=Yes;Connect Timeout=30;Driver={SQL Server Native Client 11.0}"
      //  const query = "SELECT * FROM [Person].[Person]"
    }

};
module.exports = config;