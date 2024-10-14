import { Image } from "@nextui-org/react";

function CitizenshipCard({
  name = "John Doe",
  joinDate = "10-10-2024",
  address = "Cyber City, Atlantis",
  image = "/images/user_profile.jpg",
  classNames = {
    clips: "",
  },
}) {
  return (
    <div className="w-full max-w-[25rem] h-full min-h-[30rem] from-blue-900 to-slate-950 bg-gradient-to-r flex flex-col gap-y-10 relative overflow-hidden p-10 xs:p-20 font-digital">
      <div className="w-full flex justify-center items-center">
        <Image
          alt="meta citizen user pic"
          className="w-[10rem] h-[10rem] rounded border-[0.15rem] border-slate-200"
          removeWrapper
          src={image}
        />
      </div>
      <div className="h-full flex flex-col gap-3 justify-items-center px-5 col-span-2 text-sky-200 font-semibold tracking-widest">
        <p className="text-2xl">{name}</p>
        <div>
          <span className="text-sky-100 text-small tracking-wider">
            Join Date
          </span>
          <p>{joinDate}</p>
        </div>
        <div>
          <span className="text-sky-100 text-small tracking-wider">
            Address
          </span>
          <p>{address}</p>
        </div>
      </div>

      {/* Top Left */}
      <span
        className={`absolute top-0 left-0 w-10 h-10 bg-slate-900 rotate-45 -translate-x-1/2 -translate-y-1/2 ${classNames.clips}`}
      />

      {/* Top Right */}
      <span
        className={`absolute top-0 right-0 w-20 h-20 bg-slate-900 rotate-45 translate-x-1/2 -translate-y-1/3 ${classNames.clips}`}
      />
      <span
        className={`absolute top-0 right-0 w-[70%] h-10 bg-slate-900 skew-x-[45deg] ${classNames.clips}`}
      />
      <span
        className={`absolute top-0 right-0 w-[69.5%] h-[2.4rem] bg-slate-900 skew-x-[45deg] flex gap-1 ${classNames.clips}`}
      >
        <span className="w-[1.7rem] h-[2.4rem] bg-slate-200" />
        <span className="w-[1.7rem] h-[2.4rem] bg-slate-200" />
        <span className="w-[1.7rem] h-[2.4rem] bg-slate-200" />
        <span className="w-[1.7rem] h-[2.4rem] bg-slate-200" />
        <span className="w-[1.7rem] h-[2.4rem] bg-slate-200" />
      </span>

      {/* Bottom Left */}
      <span
        className={`absolute bottom-0 left-0 w-20 h-20 bg-slate-900 rotate-45 -translate-x-1/2 translate-y-1/2 ${classNames.clips}`}
      />
      <span
        className={`absolute bottom-0 left-0 w-10 h-32 bg-slate-900 -translate-x-1 skew-y-[45deg] ${classNames.clips}`}
      />
      <span className="absolute bottom-0 left-0 w-[2.15rem] h-[7.8rem] skew-y-[45deg] flex">
        <span className="w-full h-[2.75rem] bg-slate-200" />
      </span>

      {/* Bottom Right */}
      <span
        className={`absolute bottom-0 right-0 w-[40%] h-12 bg-slate-900 -skew-x-[45deg] ${classNames.clips}`}
      />
      <span className="absolute bottom-0 right-0 w-[39.5%] h-[2.75rem] bg-slate-200 -skew-x-[45deg]" />
      <span
        className={`absolute bottom-0 right-0 w-20 h-20 bg-slate-900 rotate-45 translate-x-2/3 translate-y-2/3 ${classNames.clips}`}
      />

      {/* Internal Design */}
      <span className="absolute top-[30%] sm:top-[50%] left-[2rem] -translate-y-1/2 flex flex-col space-y-3">
        <span className="w-3 h-3 rounded-full bg-white" />
        <span className="w-3 h-3 rounded-full bg-white" />
        <span className="w-3 h-3 rounded-full bg-white" />
      </span>

      {/* Outlines */}
      <span
        className="absolute top-[1.75rem] left-0 w-[0.15rem] bg-sky-400"
        style={{ height: "calc(100% - 10.75rem)" }}
      />
      <span className="absolute -top-[0.75rem] left-[1rem] w-[0.14rem] h-[3rem] rotate-45 bg-sky-400" />
      <span
        className="absolute top-0 left-[1.75rem] h-[0.15rem] bg-sky-400"
        style={{ width: "calc(30% - 3rem)" }}
      />
      <span className="absolute -top-[0.6rem] right-[70%] w-[0.14rem] h-[3.75rem] -rotate-45 bg-sky-400" />
      <span
        className="absolute top-[2.5rem] right-[1.85rem] h-[0.15rem] from-sky-400 to-violet-900 bg-gradient-to-r"
        style={{ width: "calc(70% - 3.1rem)" }}
      />
      <span className="absolute top-[2.1rem] right-[0.8rem] w-[0.15rem] h-[3.1rem] -rotate-45 bg-violet-900" />
      <span
        className="absolute bottom-[3rem] right-0 w-[0.14rem] bg-violet-900"
        style={{
          height: "calc(100% - 7.5rem)",
        }}
      />
      <span
        className="absolute bottom-[2.95rem] right-0 h-[0.15rem] bg-violet-900"
        style={{ width: "calc(39.5% - 1.25rem)" }}
      />
      <span className="absolute -bottom-[0.55rem] right-[40%] w-[0.15rem] h-[4.2rem] rotate-45 bg-violet-900" />
      <span
        className="absolute bottom-0 left-[3.5rem] h-[0.15rem] from-sky-400 to-violet-900 bg-gradient-to-r"
        style={{ width: "calc(60% - 5rem)" }}
      />
      <span className="absolute -bottom-[0.4rem] left-[2.95rem] w-[0.15rem] h-[2rem] -rotate-45 bg-sky-400" />
      <span className="absolute bottom-[1.25rem] left-[2.25rem] w-[0.15rem] h-[5.55rem] bg-sky-400" />
      <span className="absolute bottom-[6.25rem] left-[1rem] w-[0.15rem] h-[3.5rem] -rotate-45 bg-sky-400" />
    </div>
  );
}

export default CitizenshipCard;
