import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitch,
    Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500);
    };
    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
            data-aos="fade-up"
        >
            <div className="container mx-auto max-w-5xl" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" data-aos="fade-down">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto" data-aos="fade-up"
                    data-aos-delay="200">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="flex justify-center" data-aos="fade-up" data-aos-delay="400">

                    <div className="space-y-8 w-full max-w-lg mx-auto text-center md:text-left">
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "}
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a
                                        href="mailto:nishalfernando2006@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        nishalfernando2006@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a
                                        href="tel:+94728629323"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +94728629323
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Negombo, Sri Lanka
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 flex flex-col items-center text-center">
                            <h4 className="font-medium mb-4 text-2xl">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/nishal-fernando-3873a0314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                                    <Linkedin className="w-6 h-6 text-primary hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://www.instagram.com/its_nishal_fdo?igsh=ZnE5N3g5ZXZmMWZx&utm_source=qr" target="_blank">
                                    <Instagram className="w-6 h-6 text-primary hover:scale-110 transition-transform" />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitch className="w-6 h-6 text-primary hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    );
};