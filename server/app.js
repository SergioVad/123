const express = require('express');
const config = require('config');
const chalk = require('chalk');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
const bodyParse = require('body-parser');
const app = express();
const http = require('http');
const https = require('https'); // для организации https
const fs = require('fs'); // для чтения ключевых файлов
var httpServer = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParse.json());
app.use('/api', routes);
app.use(express.static(path.resolve(__dirname, 'static')));

// if (process.env.NODE_ENV === 'production') {
//     app.use('/', express.static(path.join(__dirname, 'client')));

//     const indexPath = path.join(__dirname, 'client', 'index.html');

//     app.get('*', (req, res) => {
//         res.sendFile(indexPath);
//     });
// }
mongoose.set('strictQuery', false);

async function start() {
    try {
        // if (config.get('localhost')) {
            // await mongoose.connect(
            //     'mongodb://uskuez0i3iuni7whxnho:B1bwvGmm03CiEnVGiwBe@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bs8zzjhjnhiz2va?replicaSet=rs0',
            // );
            // httpServer.listen(8080, () =>
            //     console.log(
            //         chalk.green(`Server HTTP has been started on port 8080...`),
            //     ),
            // );
        // } else {
            await mongoose.connect('mongodb://admin:12345@82.148.31.29:27017/');
            var httpsServer = https.createServer(
                {
                    key: fs.readFileSync(
                        path.resolve(
                            __dirname,
                            '..',
                            '..',
                            '..',
                            'etc',
                            'letsencrypt',
                            'live',
                            'mebeluxury.ru',
                            'privkey.pem',
                        ),
                    ), // путь к ключу
                    cert: fs.readFileSync(
                        path.resolve(
                            __dirname,
                            '..',
                            '..',
                            '..',
                            'etc',
                            'letsencrypt',
                            'live',
                            'mebeluxury.ru',
                            'fullchain.pem',
                        ),
                    ), // путь к сертификату
                },
                app,
            );

            httpsServer.listen(8443, () =>
                console.log(
                    chalk.green(
                        `Server HTTPS has been started on port 8443...`,
                    ),
                ),
            );
        // }
    } catch (error) {
        console.log(chalk.red(error.message));
    }
}

start();
