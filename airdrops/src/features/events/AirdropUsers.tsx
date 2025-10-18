export default function AirdropUsers() {
  return (
    <div className="avatar-group -space-x-5">
        {Array.from({ length: 5 }).map((_, index) => (
            <div className="avatar" key={index}>
                <div className="w-12">
                    <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" alt="wallet avatar"/>
                </div>
            </div>
        ))}
    </div>
  )
}