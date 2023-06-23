import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header heading="Netlify Identity Auth" subHeading="When the 'Protected Page' is loaded, it sends a request to the backend (serverless function) which checks if you logged in via Netlify Identity Widget. If you are, then it fetches and returns some data to be displayed on the frontend. If you are not, it returns a 401 error and the frontend will display a lock icon." />
    </>
  )
}
