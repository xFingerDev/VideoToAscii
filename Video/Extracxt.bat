ffmpeg -i video.mp4 -r 1/1 Extract\%03d.bmp
ffmpeg -i video3.mp4 -vf scale=64:64 -r 1/1 Extract\%03d.bmp