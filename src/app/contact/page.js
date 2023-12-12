/* eslint-disable react/no-unescaped-entities */

export default function Component() {
  const CardTitle = ({ children }) => <h3 className="text-xl font-bold">{children}</h3>;
  const CardDescription = ({ children }) => <p className="text-gray-500">{children}</p>;
  const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;
  const CardContent = ({ children }) => <div>{children}</div>;
  const Card = ({ children }) => <div className="border p-4">{children}</div>;
  const Label = ({ htmlFor, children }) => <label htmlFor={htmlFor} className="block text-sm font-medium">{children}</label>;
  const Input = ({ id, placeholder, type }) => <input id={id} type={type} placeholder={placeholder} className="w-full border p-2" />;
  const Textarea = ({ id, placeholder, className }) => <textarea id={id} placeholder={placeholder} className={`w-full border p-2 ${className}`} />;
  const Button = ({ children }) => <button className="bg-blue-500 text-white px-4 py-2">{children}</button>;

  return (
    <section className="w-full py-10 md:py-10 lg:py-10">
      <div className="container  px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl">Get In Touch</h2>
        <p className="mt-2 text-center text-xl text-gray-500 md:text-2xl lg:text-3xl">
          I'm currently open for new projects and collaborations.
        </p>
        <div className="mt-10">
          <Card>
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>
                Use the form below to send me a message. I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
              </div>
              <Button>Send Message</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
