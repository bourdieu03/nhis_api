// JavaScript source code
// JavaScript source code 
const express = require('express'); // minimalist web framework for Node.js

const SqlString = require('sqlstring');

const app = express();

const sql = require('mssql/msnodesqlv8') //mssql with MS driver for SQL Server

// added windows authentication




var env = process.env.NODE_ENV || 'development';

var sqlConfig = require('./config_nhis')[env];




// Start server and listen on *http://localhost:8081/

var server = app.listen(8081, function () {

    var host = server.address().address

    var port = server.address().port




    console.log("app listening at http://%s:%s", host, port)

});




const connection = new sql.ConnectionPool(sqlConfig, function (err) {

    if (err) {

        console.log(err);

    }

}

)




// define a simple route

app.get('/', function (req, res) {

    res.json({ "message": "Welcome to NHIS API Sample App." });

});

//app.get('/', function (req, res) {

//    res.send('root')

//})

app.get('/example/a', function (req, res) {

    res.send('Hello from NHIS!')

})







app.get('/nhis_quarterly', function (req, res) {

    connection.connect().then(pool => { //Using a single connection pool is recommended

        var conn = pool.request()

        //var forInteger = /\b\d+\b/i; //make sure that there is only an integer.

        //if (req.params.Year) { //check whether it was an integer

        //    conn.input('input_parameter', req.params.Year)

        //}

        //conn.input('input_parameter', Year)  //otherwise just pass a 1

        var string = 'select * from nhis_quarterly.dbo.Quarterly'

        //var string 'select * from dbo.Quarterly'

        return conn.query(string)

        //res.send('Hello from A!')

    }).then(result => {

        let rows = result.recordset

        res.setHeader('Access-Control-Allow-Origin', '*')

        res.status(200).json(rows);

        connection.close();

    }).catch(err => {

        console.log(err);

        res.status(500).send({

            message: err

        })

        connection.close();

    });

});



















// if you plan to work with local temporary tables, use batch instead. //

//uses sp_ExecuteSQL

app.get('/nhis_quarterly/:Year/', function (req, res) {

    //app.get('/nhis_quarterly/:Year/:Quarter', function (req, res) {

    connection.connect().then(pool => { //Using a single connection pool is recommended

        var conn = pool.request()

        //var forInteger = /\b\d+\b/i; //make sure that there is only an integer.

        if (req.params.Year) { //check whether it was an integer

            conn.input('input_parameter', req.params.Year)

        }

        if (req.params.Quarter) { //check whether it was an integer

            conn.input('input_parameter2', req.params.Quarter)

        }

        //conn.input('input_parameter', Year)  //otherwise just pass a 1

        var string = 'select * from nhis_quarterly.dbo.Quarterly where Year = @input_parameter '

        //    & Quarter = @input_parameter2'

        //var string 'select * from dbo.Quarterly'

        return conn.query(string)

        //res.send('Hello from A!')

    }).then(result => {

        let rows = result.recordset

        res.setHeader('Access-Control-Allow-Origin', '*')

        res.status(200).json(rows);

        connection.close();

    }).catch(err => {

        console.log(err);

        res.status(500).send({

            message: err

        })

        connection.close();

    });

});
















// if you plan to work with local temporary tables, use batch instead. //

//uses sp_ExecuteSQL

//app.get('/nhis_quarterly/:Year/', function (req, res) {

app.get('/nhis_quarterly/:Year/Quarter:Quarter', function (req, res) {

    connection.connect().then(pool => { //Using a single connection pool is recommended

        var conn = pool.request()

        //var forInteger = /\b\d+\b/i; //make sure that there is only an integer.

        if (req.params.Year) { //check whether it was an integer

            conn.input('input_parameter', req.params.Year)

        }

        if (req.params.Quarter) { //check whether it was an integer

            conn.input('input_parameter2', req.params.Quarter)

        }

        //conn.input('input_parameter', Year)  //otherwise just pass a 1

        var string = 'select * from nhis_quarterly.dbo.Quarterly where Year = @input_parameter  AND Quarter = @input_parameter2'

        //var string 'select * from dbo.Quarterly'

        return conn.query(string)

        //res.send('Hello from A!')

    }).then(result => {

        let rows = result.recordset

        res.setHeader('Access-Control-Allow-Origin', '*')

        res.status(200).json(rows);

        connection.close();

    }).catch(err => {

        console.log(err);

        res.status(500).send({

            message: err

        })

        connection.close();

    });

});



















// if you plan to work with local temporary tables, use batch instead. //

//uses sp_ExecuteSQL

//app.get('/nhis_quarterly/:Year/', function (req, res) {

app.get('/nhis_quarterly/:Year/Quarter:Quarter/:Health_outcome/', function (req, res) {

    connection.connect().then(pool => { //Using a single connection pool is recommended

        var conn = pool.request()

        //var forInteger = /\b\d+\b/i; //make sure that there is only an integer.

        if (req.params.Year) { //check whether it was an integer

            conn.input('input_parameter', req.params.Year)

        }

        if (req.params.Quarter) { //check whether it was an integer

            conn.input('input_parameter2', req.params.Quarter)

        }

        if (req.params.Health_outcome) { //check whether it was an integer

            conn.input('input_parameter3', req.params.Health_outcome)

        }

        conn.input('nameSuffix', sql.VarChar, req.params.Health_outcome)

        var param3 = '%input_parameter3%'

        //conn.input('input_parameter', Year)  //otherwise just pass a 1

        var string = `select * from nhis_quarterly.dbo.Quarterly where Year = @input_parameter  AND Quarter = @input_parameter2 AND Health_outcome LIKE '%' + @nameSuffix + '%'`

        //var string 'select * from dbo.Quarterly'

        return conn.query(string)

        console.log(req.query.Health_outcome);

        //res.send('Hello from A!')

    }).then(result => {

        let rows = result.recordset

        res.setHeader('Access-Control-Allow-Origin', '*')

        res.status(200).json(rows);

        connection.close();

    }).catch(err => {

        console.log(err);

        res.status(500).send({

            message: err

        })

        connection.close();

    });

});






// if you plan to work with local temporary tables, use batch instead. //

//uses sp_ExecuteSQL

//app.get('/nhis_quarterly/:Year/', function (req, res) {

app.get('/nhis_quarterly/:Year/:Health_outcome/', function (req, res) {

    connection.connect().then(pool => { //Using a single connection pool is recommended

        var conn = pool.request()

        //var forInteger = /\b\d+\b/i; //make sure that there is only an integer.

        if (req.params.Year) { //check whether it was an integer

            conn.input('input_parameter', req.params.Year)

        }

        if (req.params.Health_outcome) { //check whether it was an integer

            conn.input('input_parameter3', req.params.Health_outcome)

        }

        conn.input('nameSuffix', sql.VarChar, req.params.Health_outcome)

        var param3 = '%input_parameter3%'

        //conn.input('input_parameter', Year)  //otherwise just pass a 1

        var string = `select * from nhis_quarterly.dbo.Quarterly where Year = @input_parameter  AND Health_outcome LIKE '%' + @nameSuffix + '%'`

        //var string 'select * from dbo.Quarterly'

        return conn.query(string)

        console.log(req.query.Health_outcome);

        //res.send('Hello from A!')

    }).then(result => {

        let rows = result.recordset

        res.setHeader('Access-Control-Allow-Origin', '*')

        res.status(200).json(rows);

        connection.close();

    }).catch(err => {

        console.log(err);

        res.status(500).send({

            message: err

        })

        connection.close();

    });

});
