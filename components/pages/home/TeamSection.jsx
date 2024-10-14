import { Image, Link } from "@nextui-org/react";

function TeamSection() {
  const teams = [
    {
      designation: "Chief Executing Officer (CEO)",
      id: 1,
      imageUrl: "/images/Bhushan.jpg",
      linkedinUrl: "https://www.linkedin.com/in/thenameisbvn/",
      xUrl: "https://www.x.com/",
      name: "Bhushan Nanaware",
    },
    {
      designation: "Chief Technology Officer (CTO)",
      id: 2,
      imageUrl: "/images/Ravindra.jpg",
      linkedinUrl: "https://www.linkedin.com/in/ravi-ndra-singh/",
      xUrl: "https://www.x.com/",
      name: "Ravindra Singh",
    },
    {
      designation: "Chief Operating Officer (COO)",
      id: 3,
      imageUrl: "/images/Vaibhav.jpg",
      linkedinUrl: "https://www.linkedin.com/in/vaibhav2003/",
      xUrl: "https://www.x.com/",
      name: "Vaibhav Singh",
    },
  ];
  return (
    <section
      className="relative w-dvw flex justify-center items-center bg-white dark:bg-slate-950"
      style={{
        minHeight: "calc(100svh - 80px)",
      }}
    >
      <div className="w-[90%] lg:w-[85%] xl:[80%] my-20">
        <div className="w-full flex flex-col">
          <p className="mb-5 text-3xl font-semibold dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px] text-center">
            Meet With Our Creative <br /> Dedicated Team
          </p>
          <p className="text-base text-dark-text text-center">
            We are passionate about shaping the future and making the virtual
            world accessible to everyone.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 h-fit gap-10">
          {teams.map((member) => (
            <div
              key={`team-member-${member.id}`}
              className="flex flex-col text-center items-center"
            >
              <Image
                alt={`${member.designation} Image`}
                src={member.imageUrl}
                classNames={{
                  img: "rounded",
                  wrapper: "mb-4 w-[15rem] rounded",
                }}
              />
              <label className="text-large dark:text-white font-medium">
                {member.name}
              </label>
              <p className="text-dark-text">{member.designation}</p>
              <div className="flex space-x-2 mt-3">
                <Link
                  className="text-base text-dark-text hover:text-white hover:bg-primary p-2 leading-none rounded-full transition-all duration-250"
                  href={member.linkedinUrl}
                  target="_blank"
                >
                  <i className="bi bi-linkedin"></i>
                </Link>
                <Link
                  className="text-base text-dark-text hover:text-white hover:bg-primary p-2 leading-none rounded-full transition-all duration-250"
                  href={member.xUrl}
                  target="_blank"
                >
                  <i className="bi bi-twitter-x"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
