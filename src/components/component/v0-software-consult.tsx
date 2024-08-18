/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/dkFcsWqji0S
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Gabarito } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

gabarito({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import LeonWebDesignsLogo from '../LeonWebDesignsLogo';

export default function LandingPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //@ts-ignore
    const name = e.currentTarget.name.value;
    const email = e.currentTarget.email.value;
    const company = e.currentTarget.company.value;
    const message = e.currentTarget.message.value;

    const data = {
      name,
      email,
      company,
      message,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle successful submission
        console.log('Form submitted successfully');
      } else {
        // Handle error
        console.error('Form submission failed');
      }
    } catch (error) {
      // Handle network error
      console.error('Network error:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-primary text-primary-foreground">
        <LeonWebDesignsLogo className="h-10 fill-white" />
        <span className="sr-only">Leon Web Designs</span>
        <span className="px-4 font-bold">Leon Web Designs</span>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#services"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full h-screen border-y from-primary to-secondary bg-black relative">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>{' '}
          {/* Add this overlay */}
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16 h-full flex flex-col justify-center z-20 bg-[url('https://leon-web-designs.s3.amazonaws.com/hero.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 ">
              <div className="z-10">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-primary-foreground">
                  Unlock Your Software Potential
                </h1>
                <p className="mt-4 max-w-[700px] text-primary-foreground md:text-xl">
                  Our expert team of software consultants is here to help you
                  achieve your business goals. Schedule a consultation today.
                </p>
                <div className="mt-6">
                  <Link
                    href="#contact"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-secondary to-tertiary"
        >
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-secondary-foreground">
                  Expertise You Can Trust
                </h2>
                <p className="max-w-[900px] text-secondary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of experienced software consultants has a proven
                  track record of helping businesses like yours succeed. We
                  offer a wide range of services to meet your unique needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1 bg-card p-6 rounded-lg">
                <h3 className="text-lg font-bold text-card-foreground">
                  Software Architecture
                </h3>
                <p className="text-sm text-card-foreground">
                  We design scalable and maintainable software systems to power
                  your business.
                </p>
              </div>
              <div className="grid gap-1 bg-card p-6 rounded-lg">
                <h3 className="text-lg font-bold text-card-foreground">
                  Agile Transformation
                </h3>
                <p className="text-sm text-card-foreground">
                  We help you adopt agile practices to improve your development
                  process.
                </p>
              </div>
              <div className="grid gap-1 bg-card p-6 rounded-lg">
                <h3 className="text-lg font-bold text-card-foreground">
                  Cloud Migration
                </h3>
                <p className="text-sm text-card-foreground">
                  We assist with migrating your applications to the cloud for
                  increased scalability and reliability.
                </p>
              </div>
              <div className="grid gap-1 bg-card p-6 rounded-lg">
                <h3 className="text-lg font-bold text-card-foreground">
                  DevOps Automation
                </h3>
                <p className="text-sm text-card-foreground">
                  We implement DevOps practices to streamline your software
                  delivery pipeline.
                </p>
              </div>
              <div className="grid gap-1 bg-card p-6 rounded-lg">
                <h3 className="text-lg font-bold text-card-foreground">
                  UI/UX Design
                </h3>
                <p className="text-sm text-card-foreground">
                  We create user-friendly interfaces that enhance the experience
                  for your customers.
                </p>
              </div>
              <div className="grid gap-1 bg-card p-6 rounded-lg">
                <h3 className="text-lg font-bold text-card-foreground">
                  Quality Assurance
                </h3>
                <p className="text-sm text-card-foreground">
                  We ensure your software meets the highest standards of quality
                  and reliability.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-40 bg-slate-100 ">
          <div className="container space-y-12 px-4 md:px-6 justify-center items-center flex-row">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                  Trusted Partners
                </h2>
                <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We work with leading companies in the industry to deliver the
                  best solutions for our clients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-center justify-center gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
              <div className="grid gap-4 bg-card p-6 rounded-lg h-[200px] w-[200px] justify-center items-center text-center shadow-lg border-[1px] border-black">
                <img
                  src="https://leon-web-designs.s3.amazonaws.com/artforapartner.jpg"
                  alt="Artfora"
                  width={125}
                  height={100}
                  className="object-contain"
                  style={{ objectFit: 'cover' }}
                />
                <p className="text-md text-card-foreground font-medium">
                  Artfora
                </p>
              </div>
              <div className="grid gap-4 bg-card p-6 rounded-lg h-[200px] w-[200px] justify-center items-center text-center shadow-lg border-[1px] border-black">
                <img
                  src="https://leon-web-designs.s3.amazonaws.com/newworldpart.png"
                  alt="New World Inc."
                  width={125}
                  height={100}
                  className="object-contain"
                  style={{ objectFit: 'cover' }}
                />
                <p className="text-sm text-card-foreground font-medium">
                  New World Inc.
                </p>
              </div>
              <div className="grid gap-4 bg-card p-6 rounded-lg h-[200px] w-[200px] justify-center items-center text-center shadow-lg border-[1px] border-black">
                <img
                  src="https://leon-web-designs.s3.amazonaws.com/tp_logo.png"
                  alt="Partner 3"
                  width={125}
                  height={100}
                  className="object-contain"
                  style={{ objectFit: 'cover' }}
                />
                <p className="text-sm text-card-foreground font-medium">
                  Tech Plate
                </p>
              </div>
              <div className="grid gap-4 bg-card p-6 rounded-lg h-[200px] w-[200px] justify-center items-center text-center shadow-lg border-[1px] border-black">
                <img
                  src="https://leon-web-designs.s3.amazonaws.com/Bourbonality-Straight-Alpha-40.webp"
                  alt="Partner 4"
                  width={150}
                  height={100}
                  className="object-contain"
                  style={{ objectFit: 'cover' }}
                />
                <p className="text-sm text-card-foreground font-medium">
                  Bourbonality
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
                Schedule a Consultation
              </h2>
              <p className="mx-auto max-w-[600px] text-secondary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Fill out the form below to schedule a consultation with our
                software experts.
              </p>
            </div>
            <form
              className="mx-auto w-full max-w-md space-y-4"
              onSubmit={handleSubmit}
            >
              <Input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full bg-card text-card-foreground"
              />
              <Input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full bg-card text-card-foreground"
              />
              <Input
                type="text"
                id="company"
                placeholder="Company"
                className="w-full bg-card text-card-foreground"
              />
              <Textarea
                id="message"
                placeholder="Message"
                className="w-full min-h-[150px] bg-card text-card-foreground"
              />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground"
              >
                Submit
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-primary text-primary-foreground">
        <p className="text-xs">
          &copy; 2024 Leon Web Designs. All rights reserved.
        </p>
        {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav> */}
      </footer>
    </div>
  );
}
