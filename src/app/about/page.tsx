import Image from "next/image";

export default function About() {
  return (
    <div className="bg-black min-h-screen text-white font-Montserrat">
      <div>
        <Image
          src="/Female1.png"
          width={1250}
          height={300}
          alt="Picture of the author"
        />
      </div>
      <div className="flex justify-center mt-20">
        <div className="md:w-[900px] mx-5">
          <p>
            Operating under the Ziauddin Trust, Dr. Ziauddin Group of
            Hospitals is one of the largest private groups in the country. Its
            mission has been to reach out to the masses and cater to their needs
            for quality health care facilities at affordable rates in the
            country. It began with a small maternity home and has grown
            exponentially over the years to include five hospitals, including
            three tertiary-care facilities, responding to the healthcare needs
            of the people. These hospitals are:
            <div>
              <li className=" underline">
                Dr. Ziauddin Hospital North Nazimabad Campus Clinics
              </li>
              <li className=" underline">
                Dr. Ziauddin Hospital, Clifton Campus
              </li>
              <li className=" underline">Dr. Ziauddin Cancer Hospital</li>
              <li className=" underline">
                Dr. Ziauddin Memorial Hospital Boat Basin Executive
              </li>
              <li className=" underline">
                Dr. Ziauddin Hospital, Keamari Campus
              </li>
            </div>
            All facilities under Dr. Ziauddin Group of Hospitals are equipped
            with state-of-the-art equipment and focused on providing services of
            the highest quality. The diagnostic technologies, and medical and
            surgical treatments provided, are controlled to keep pace with the
            technological advancements. The planning and development team of Dr.
            Ziauddin Group of Hospitals is working continuously to increase the
            patient capacity at each of the hospitals to make quality health
            care accessible to as many people as possible. Dr. Ziauddin Group of
            Hospitals competes with some of the biggest names in the healthcare
            industry and aspires to become the preferred healthcare facility for
            our people and a symbol of national pride for all. Zia Medical
            Center located in Dubai, UAE is a part of Dr. Ziauddin Group of
            Hospitals. ZMC practices the same standard of excellence and
            provides premium healthcare to the residents of Dubai.
          </p>
        </div>
      </div>
    </div>
  );
}
