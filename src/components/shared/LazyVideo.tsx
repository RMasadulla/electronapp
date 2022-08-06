type Props = {
    video: string
    opacity?: number
}

export default function LazyVideo({ video, opacity }: Props) {
    return (
        // <div
        //     className={`absolute inset-0 w-full h-full z-0 bg-[url('images/embers_video_bg_fallback.png')] bg-cover bg-no-repeat`}
        // />
        <video
            playsInline
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            style={{ opacity: opacity ?? 1 }}
        >
            <source src={video} type="video/mp4" />
        </video>
    )
}
