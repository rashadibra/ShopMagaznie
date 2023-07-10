import React from 'react'
import { Link } from "react-router-dom";

import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <div className="footer-basic">
        <footer>
            <div className="social">
                <a href="https://www.instagram.com/reshad.098/" target="_blank"><img src="data:image/png;base64,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" alt="" /></a>
                <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUAAAD///8oKCjq6uoEBAR6enp3d3cJCQnf398NDQ0RERE7OzsUFBSNjY10dHQbGxvz8/OhoaG+vr62trbLy8tXV1f19fUZGRnZ2dnt7e3R0dEyMjJKSkorKyuxsbE2NjZpaWmkpKRBQUGBgYFcXFyXl5ciIiJjY2NPT0+IiIiRkZE1O40aAAAKh0lEQVR4nO2dC3uqOBCGQdPSIBVaUaqoRa205/z/H7jcReQSwjeEp3u+3WdPe7ZteJswmSSTGU0nlLuK9Ka1aH06rlY7ymfQNYof6u52x9D3/Ta2sma+H767O5fiWQgIt8FRlKyq42U+d9DPgybcbGTxMsE7Eknonp5lmJjGIsV/pJ+/nj6ADwUjfHFnLRAG4zNDM+xCnmHMQtviCeGd0m/Yu1vQg6EIO8Ym0wzPqPydZ5nc4KHNOTdiVSitF1BPIgg37jKQGJ25YkJumDEny0GT/+FCrM5gwu3f6wC6kphlmnbMaNx68no9qib8i6ErFNqedYNM/moo4zDC3ROYMDJKxsyzWfZixub1sntRRbj9/oHzJeLWwTRLg9V8GmJYpQk3+O4rQ9p2MVjjz/+sxieUds1E5Vk8Na3JZ88jE7bP7ygxM5pFjKwbF6v38Qjdsz0CX8KYIaafnaVMTn9CR1+MxJdC8tvbGC4l/PL+hGPiJYrcHa3oR3JCZ0U0Q7SKzYr5/6u3A9CP0BFetmNlhKaRL67WpIStey60jNzUsm48L8kIj3+UAUYyC6O67jVv9CAc1YTWySi2AQIKwnf0MkJGPCPUruLdKEqodIDexMz8ozcw4RQ6MJWR74acNkhCZww3VFBW/jbOxDY5hAgDpUhVmVb2wV8U4fykFOhRjGcfzERexm5CJ/hUylMjZmU29TIHEL6ohakXKzZfuzdVuwgnCajdGHnnFk4HIRmgvfgJnuu0TBR4XT/AyO1N12KjnfCDgm3/dH2fb52W6Wyjz7tdRCtDtDsGaivhxWpvpL/C5elFZBoTINRyJ1X7I00InyV+TgK2T5xQy2eN1mPyNkIHu+H03eO8fiu2kMnMjS1JeKmehw3SvtcmkiBhPlCvLT+8mRC7mngV9JN7EuaIXxKEUDPq9d3NFSbMtWycF5sIpU7km+T33soVJ2SZsWh0UZsIkYCf/feqe/ShlZmLpmHSQIjcVAtFpwg5wlzXXoTImZDLBHVJEGpBvTGrJVwDAbWTBKAUofYkTOgg9w37bd8OeoT1se59qCF0kC+hKXcIL/dL9uvG6SPhEXo20fT+d0hqlGrauca3eSQEhcekYpIxBrIvSs1i8ZEQamYucoDypkCAcIkEFNhGqZfkKK17Kx4Iv5GAe0lAecLZompPK4TPX0hAwT1bJOHji1EhBNJFYtIx6gOm5Oq4uScEn/EupMMnB/Rh1QW/J7zg6GL1Oci81xC3atZGiINL9KqEULu3NWVCeDCefGjokFGqabuyn1Ei3MKPQeUvwwwjvOvFEiE8lITJh74OXN6UjU2JMASBFTIECecvD9oNO9HblzqxRHgAgRUS2774eIY3rGlWHeEK3sxMhBC6lCn0WUNIEJEnQkgVS32bigtCgqNsAUK6EIEHwjeCmK5uwg30aOROpyohdlmYqpvwnaDVXLlPnBFSHPYKEFJGc1YISc7r1RLm+24ZYUDRhlrC3O3PCPcUbaglPPwtE+6gG2y51BLmi/2EkMTOKCe05zdCuM+dSjEhX9wIiZpQTJj5Nb+a0M0Jqbxf5YRvOeErUQPKCY8Z4ZaqAeWEZkY4p2pAOWHiuf3qPky8b03fkjWjnvDNjQldsp+vnJCzdUxI5LJpUyBcBxHhB/RI9E7KCbX154uu4TcRC5nKCc+eq2vArZL1e0WdMaXO4253KhcTYT7zd1BC+bwHD5qb3c0JyDp/6Bpw7SsX4FUr0L4RXy+hywog4Q7zRGx/nioh6t3xQ2iGEiAhysjaC+hcASRELei8PXRbHUiIWpRbP1MlRDla/DxVQtwcNtH30DnDHmqitnSOux0PPYPFEX5gnLZY0PMKHCHIpYELR0i4pBskHCFNCMpw4QgpogoQwhFiY7FxwhHipkOsYIQO0YHmYMEIp5qqAkc41ekQRzjV6RBHiAzHhkbOwQgD4ENNk5Akugeh+nu4EiIIi8bo8+k+l86l81LQcVmTg+cpUA0iLLvzZGYE/5MuRlcTOV0jzZidCreWrtEkCEmTOk+CkNRqTYKQNJ3eJAhJF2KTICSJfs41BUJG6h9NgdD4/YSkWz5TIOS/n5A0S/4UCDXSJNaTIKQLTNT+EY5ESLqr9Y/wHyFEv5+Q8iLuJAh90so/UyA8QONLq5oCYQCNEa5qCoTYKOiqJkJIaE2nQOjq2kdA9tMnQBi+KL4zQ074pfreEzmhq/ruGjXhdaP6/iE1YXr/UOUdUmpC9XdIiQnze8AK73ITE+Z3uRXexycmLO7jq8upQEyo/48IleU2oa18Xcptoiw/DSmhUcpPoyzHECWhf9JLhKryRFES5nkF1eb6oiTM61ypzddGSVjJ16Yo5x4lYSXnnqK8iYSERTp4tbkv6QjPRR5qtflLCQmLNtTmoKUjrMlBqySPMBlhqUACZS5odYTrUhuU+bwnRwjfc1NH2JCTHZ5XXxnhWzkxDmVtBFWE9/c+KOtbqCK8b4OyRokiwkpBJMo6M4oIW+vMYIepGsL2WkHYek9KCL+rxW0oa3apIHwsm0tZd00F4WOVMMraeQoIayofU9Y/VEC4EiHE1bAcn3AhVMMSV4d0dMJTXRuUtWTHJtzXZqKkrAc8NqF4PWBUgZuRCWusTDMhxkEdl/DU0AZlbfVRCc9NbTQRPgMaHZWwsbRyEyHiJGNMwuYido2E+vALQyMSvjW30UyoX4Ze1h+PsK0qbwuh7gy8yz4W4aG1cnQb4dBZcbQ+rPFGxQj1y7Cs2iMRHtor1LcSDjSo4xCyjlbaCYed749DuO1oo4NwEOIYhKwLsJNwCKJ1eW3X38EpHbpT4HQT6k5AmjxjiGbLztoEIoT6nK5Y6EAdRYrVChASRUwNV5sn05NQd3CZi2HyheopixJCs+CBJFq4XZAQsNIAq2U1IUeov0+qG6/v3U/cl1DXCeLCeoux5I+g+2llCPWj6qHK0pVAIN6BPQnpqxe1y0yX5MJvoAyhAzvT6C/DSEfoWsCPkSfUnRVpRps2ecl/v0QnCVlCnez6SbusbIT2f1wJQkeBUQ1Tvq9NzxEqR6jr7nncfNvZFDFbNG+KggmjRaN7c1RJE4RGeEYKuFgJ+qEYwki36ibcpMugGfIMsLeBGU5YDvMzQ5I8qMwKGUsBL90PBCfU9e33bebg3GRgPtO0uJYA/jx1bsbQEEba3TrSsjjwjWSGbXGW9OBlN+gRBxLerxtt7oEAZ5Zd+DDybyCEMI4sLgfgeJwPpWOWbTPDSAbEVWyjgpYw0sZdBsXzsWhwGZLjlRmc217kv8SA6++PznzgIkIQRtrcPWiEaJs9e9Pktm2anmVF3xj/gjjmwWCEdz5A4oQYnuUdTCbQm9HX2AfL9jwzwst+MXt3iPm8E4owlnu6nf6n0xizfcs+fDZj2p8Hb3awo8nG8+Lei7/r9dR6HthXSMJYm9t4TY19NGK5EVGeFywah7kii7Q/f85CM5r1LMuLB2fUffHt5K2Ec90qNGFkXIPjHWRsNhJYzq2yeNRx2UeZZ6YdL7CxeROeMJK72x1D3/dLfRlz8hiKm2WlX3Hw/fDd3bUe5UqLhDCXu4r0liLmmAlq/E/8r3Y9RV8x0Gnp0H95XaV0rINeggAAAABJRU5ErkJggg==" alt="" /></a>
                <a href="https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B6Kkdb4S6RmK8fY%2FMmnubrw%3D%3D" target="_blank"><img src="data:image/png;base64,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" alt="" /></a></div>
            <ul className="list-inline">
                <li className="list-inline-item"><Link to="/Main">About</Link></li>
                <li className="list-inline-item"> <Link to="/">Shop</Link></li>
                <li className="list-inline-item"><Link to="/Contact">Contact</Link></li>
            </ul>
            <p className="copyright">
              Email:rashad.ibra2003@gmail.com      Phone:+994517275095
              <br />
              <br />
              Company Name © 2023
            </p>
        </footer>
    </div>
  )
}

export default Footer