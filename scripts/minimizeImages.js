const ora = require('ora');
const path = require('path');

const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminWebP = require('imagemin-webp');

const getFrom = path.join(process.cwd(), 'scripts/downloadedImages/');
const putTo = path.join(process.cwd(), `directory/images/`) 

module.exports.bgdMinimizer = async () => {
    const gifProg = ora('Minimizing GIFs - ⏰ Just a moment...').start();

    //Minify Gifs
    try {
      await imagemin([`${getFrom}/*.gif`], {
          destination: putTo,
          plugins: [
              imageminGifsicle(),
          ]
      });

      gifProg.succeed('GIFs Minimized into directory/images');
    }
    catch(err) {
      gifProg.fail('There was an error minimizing some GIFs 😬')
    }

    const pngProg = ora('Minimizing PNGs - 🙌🏾Hol\' up...').start();

    try {
      //Minify PNGs
      await imagemin([`${getFrom}*.png`], {
        destination: putTo,
        plugins: [
          imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
      })

      pngProg.succeed('PNGs Minimized into directory/images');
    }
    catch(err) {
      pngProg.fail('There was an error minimizing PNGs 😬')
    }

    const jpgProg = ora('Minimizing JPGs - 🏃🏿‍♀️💨 Crunching at the speed of life...').start();

    try {
      //Minify JPGs
      await imagemin([`${getFrom}/*.{jpg,jpeg}`], {
        destination: putTo,
        plugins: [
          imageminMozjpeg()
        ]
      })

      jpgProg.succeed('JPGs Minimized into directory/images');
    }
    catch(err) {
      jpgProg.fail('There was an error minimizing JPGs 😬')
    }

    const webpProg = ora('Minimizing Webp\'s - 😎👉👉Hold tight...').start();

    try {
      //Minify Webps
      await imagemin([`${getFrom}/*.webp`], {
        destination: putTo,
        plugins: [
          imageminWebP()
        ]
      })

      webpProg.succeed('WEBp\'s Minimized into directory/images');
    }
    catch(err) {
      webpProg.fail('There was an error minimizing Webp\'s 😬')
    }
}
