import Image from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

export default function Testimonials() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Don't take our word for it</h2>
                        <p className="text-xl text-gray-400">
                            Witness the transformative power of DataPulseX
                            firsthand as it reshapes the landscape of project
                            management and analytics
                        </p>
                    </div>

                    {/* Testimonials */}
                    <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
                        {/* 1st testimonial */}
                        <div
                            className="flex flex-col h-full p-6 bg-gray-900"
                            data-aos="fade-up"
                        >
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image
                                        className="rounded-full"
                                        src={TestimonialImage01}
                                        width={48}
                                        height={48}
                                        alt="Testimonial 01"
                                    />
                                    <svg
                                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-green-500"
                                        viewBox="0 0 24 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                                    </svg>
                                </div>
                            </div>
                            <blockquote className="text-lg text-gray-400 grow">
                                — "DataPulseX has been a game-changer for our
                                project management. With its real-time analytics
                                and customizable dashboards, we've not only
                                saved countless hours but also significantly
                                reduced our operational costs. The insights
                                provided by DataPulseX allow us to make informed
                                decisions swiftly, keeping our projects on
                                schedule and our clients more than satisfied.
                                It's an indispensable tool in our arsenal."
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">
                                    Jenny Clarkson
                                </cite>{" "}
                                -{" "}
                                <a
                                    className="text-green-500 hover:text-gray-200 transition duration-150 ease-in-out"
                                    href="#0"
                                >
                                    UX Board
                                </a>
                            </div>
                        </div>

                        {/* 2nd testimonial */}
                        <div
                            className="flex flex-col h-full p-6 bg-gray-900"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image
                                        className="rounded-full"
                                        src={TestimonialImage02}
                                        width={48}
                                        height={48}
                                        alt="Testimonial 02"
                                    />
                                    <svg
                                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-green-500"
                                        viewBox="0 0 24 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                                    </svg>
                                </div>
                            </div>
                            <blockquote className="text-lg text-gray-400 grow">
                                — "Efficiency in resource allocation is crucial
                                in construction, and DataPulseX has provided us
                                with exactly that. The platform's ability to
                                dissect and refine our operational workflows has
                                been pivotal in streamlining our processes. The
                                predictive analytics feature is particularly
                                impressive, helping us anticipate potential
                                issues and adapt our strategies proactively.
                                DataPulseX hasn't just improved our projects; it
                                has transformed our entire approach to project
                                management."
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">
                                    Mark Thompson
                                </cite>{" "}
                                -{" "}
                                <a
                                    className="text-green-500 hover:text-gray-200 transition duration-150 ease-in-out"
                                    href="#0"
                                >
                                    UX Board
                                </a>
                            </div>
                        </div>

                        {/* 3rd testimonial */}
                        <div
                            className="flex flex-col h-full p-6 bg-gray-900"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image
                                        className="rounded-full"
                                        src={TestimonialImage03}
                                        width={48}
                                        height={48}
                                        alt="Testimonial 03"
                                    />
                                    <svg
                                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-green-500"
                                        viewBox="0 0 24 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                                    </svg>
                                </div>
                            </div>
                            <blockquote className="text-lg text-gray-400 grow">
                                —"In the world of cybersecurity, maintaining
                                top-notch quality and adhering to compliance
                                standards is non-negotiable. DataPulseX has
                                empowered us with its comprehensive monitoring
                                capabilities and agile adaptability. Its
                                intuitive reporting and quality checks are
                                integrated seamlessly into our workflows,
                                elevating our standards and ensuring that we
                                deliver excellence consistently. DataPulseX
                                isn't just a tool; it's a part of our commitment
                                to quality."
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">
                                    Jared Hills
                                </cite>{" "}
                                -{" "}
                                <a
                                    className="text-green-500 hover:text-gray-200 transition duration-150 ease-in-out"
                                    href="#0"
                                >
                                    UX Board
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
