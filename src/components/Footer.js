import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-16 -mx-24">
      <div className="md:flex justify-between">
        <div>
          <a
            href="https://www.facebook.com/groups/150591081361"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-transparent hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded block mx-auto md-mx-0">
              Facebook
            </button>
          </a>
          <a
            href="https://twitter.com/tcpulpeoria"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-transparent hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded block mx-auto md-mx-0">
              Twitter
            </button>
          </a>
        </div>
        <p className="text-white text-center mt-4">
          317 S. MacArthur Highway <br />
          Peoria, IL 61605
        </p>
        <div className="mt-4 md:mt-0">
          <a
            className="text-white text-center md:text-right"
            href="tel:309-673-7474"
          >
            <p className="text-white text-center md:text-right">
              phone: <span className="font-bold">309.673.7474</span>
            </p>
          </a>
          <p className="text-white text-center md:text-right">
            fax: <span className="font-bold">309.672.4366</span>
          </p>
        </div>
      </div>
      <hr className="mt-4" />
      <p className="text-white mt-4 px-4 md:px-0">
        These programs have been made possible, in part, by a grant from the
        Heart of Illinois United Way, AT&T, Caterpillar. Inc., CEFCU, Comcast,
        Community Foundation of Central Illinois, National Urban League and PNC
        Banks All rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
