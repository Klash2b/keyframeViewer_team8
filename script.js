const frames = [];
const button = document.querySelector("button");
const select = document.querySelector("select");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

async function onClick(evt) {
    if (HTMLVideoElement.prototype.requestVideoFrameCallback) {
        let stopped = false;
        const video = await getVideoElement();
        const drawingLoop = async (timestamp, frame) => {
            const bitmap = await createImageBitmap(video);
            const index = frames.length;
            frames.push(bitmap);
            select.append(new Option("Frame #" + (index + 1), index));

            if (!video.ended && !stopped) {
                video.requestVideoFrameCallback(drawingLoop);
            } else {
                select.disabled = false;
            }
        };
        video.requestVideoFrameCallback(drawingLoop);
        button.onclick = (evt) => stopped = true;
        button.textContent = "stop";

    } else {
        console.error("your browser doesn't support this API yet");
    }

    return frames;
};

select.onchange = (evt) => {
    const frame = frames[select.value];
    canvas.width = frame.width;
    canvas.height = frame.height;
    ctx.drawImage(frame, 0, 0);
};

async function getVideoElement() {
    const video = document.createElement("video");
    // video.crossOrigin = "anonymous";
    video.muted = true;
    video.type = "video/mp4";
    video.src = "../Jellysmack_videos_360p/-h3hDZa5M2w_yt_1080p.mp4";
    document.body.append(video);
    await video.play();
    return video;
}