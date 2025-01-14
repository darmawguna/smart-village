import ButtonNavigate from "@/Components/Elements/ButtonNavigate";
import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

const DetailReport = () => {
    return (
        <HomeLayout>
            <div className="flex flex-col min-h-screen mt-[80px] px-4">
                <ButtonNavigate navigateTo="/report" variant="pointer">
                    <img
                        src="/assets/icons/back.png"
                        alt="back"
                        className="w-7 h-7"
                    />
                </ButtonNavigate>
                <div className="flex justify-between md:flex-col md:justify-center md:items-center">
                    <img
                        src="/assets/images/background1.jpg"
                        alt="imgReport"
                        className="w-[350px] h-[400px] md:h-[350px]"
                    />
                    <div className="w-[70%] md:w-full lg:w-[55%]">
                        <h1 className="font-semibold text-2xl">Judul</h1>
                        <div className="flex gap-10">
                            <div className="flex gap-1">
                                <img
                                    src="/assets/icons/calendar.png"
                                    alt="calendar"
                                    className="w-5 h-5"
                                />
                                <span>12-12-2025</span>
                            </div>
                            <div className="flex gap-1">
                                <img
                                    src="/assets/icons/status.png"
                                    alt="status"
                                    className="w-5 h-5"
                                />
                                <span>Ditanggapi</span>
                            </div>
                        </div>
                        <div>
                            <h2>Description</h2>
                            <hr />
                            <p className="w-full text-justify">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Odit iste non quibusdam
                                veritatis aperiam quo eius modi fugiat obcaecati
                                necessitatibus nostrum adipisci possimus ducimus
                                temporibus dolorum nobis quisquam cum iusto,
                                tempora harum optio quia ipsum! Maiores optio
                                assumenda adipisci nostrum eum nesciunt nam!
                                Autem doloribus quisquam omnis possimus quo
                                mollitia voluptatibus deleniti eos minus magnam
                                culpa numquam, ducimus recusandae, nisi
                                architecto nesciunt aliquid non maxime vel
                                soluta? Perspiciatis ad cum sunt minima,
                                voluptatibus, mollitia fuga tempore est
                                provident modi distinctio vitae aperiam fugit
                                vero eveniet cumque tenetur ratione ipsa?
                                Accusantium consequatur porro alias omnis! Optio
                                aspernatur eligendi similique architecto eaque?
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Totam praesentium ipsa
                                accusantium repellat velit deserunt perspiciatis
                                enim facere expedita, accusamus earum vel animi
                                placeat sunt perferendis nam nemo tempora
                                provident. Molestiae, non. Quibusdam deserunt,
                                obcaecati impedit minima quam animi rerum
                                cupiditate reprehenderit ut nostrum rem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default DetailReport;
