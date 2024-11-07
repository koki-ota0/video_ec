from __future__ import unicode_literals
import youtube_dl
from pytube import YouTube

def download_youtube_video(url, output_path='.'):
    try:
        yt = YouTube(url)
        video = yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first()
        video.download(output_path)
        print(f"Video downloaded successfully to {output_path}")
    except Exception as e:
        print(f"An error occurred: {e}")

video_urls =[
    "https://www.youtube.com/watch?v=qSqVVswa420",
    "https://www.youtube.com/watch?v=rt-2cxAiPJk",
    "https://www.youtube.com/watch?v=X0tOpBuYasI",
    "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
    "https://www.youtube.com/watch?v=F7nQ0VUAOXg",
    "https://www.youtube.com/watch?v=0IOsk2Vlc4o",
    "https://www.youtube.com/watch?v=DqIDujormDg",
    "https://www.youtube.com/watch?v=dxWvtMOGAhw",
    "https://www.youtube.com/watch?v=lc0UehYemQA",
    "https://www.youtube.com/watch?v=d9MyW72ELq0"
]
# for url in video_urls:
#     download_youtube_video(url, 'public/videos')

# ydl_opts = {}
# for url in video_urls:
#     with youtube_dl.YoutubeDL(ydl_opts) as ydl:
#         ydl.download([url])

import yt_dlp

def download_youtube_video(url, output_path='.'):
    ydl_opts = {
        'format': 'best',  # 最高の画質
        'outtmpl': f'{output_path}/%(title)s.%(ext)s',  # 出力パス
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])

# 使用例
for url in video_urls:
    download_youtube_video(url, 'public/videos')