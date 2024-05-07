/** @type {import('next').NextConfig} */


if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
    throw new Error(`
      Please provide a valid WordPress instance URL.
      Add to your environment variables WORDPRESS_API_URL.
    `);
  }
  
  const { protocol, hostname, port, pathname } = new URL(
    process.env.WORDPRESS_API_URL,
  );

const nextConfig = {
   
    images : {
        
        remotePatterns :[
            {
                protocol :"https",
                hostname : "wpdemo.gclientdemo.com"
            }
        ]
    }
};

export default nextConfig;
