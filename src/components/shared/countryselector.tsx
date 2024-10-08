import React, { ChangeEvent, useState } from "react";

const countries = [
    { code: "af", name: "Afghanistan", flagUrl: "https://flagcdn.com/w20/af.png" },
    { code: "al", name: "Albania", flagUrl: "https://flagcdn.com/w20/al.png" },
    { code: "dz", name: "Algeria", flagUrl: "https://flagcdn.com/w20/dz.png" },
    { code: "as", name: "American Samoa", flagUrl: "https://flagcdn.com/w20/as.png" },
    { code: "ad", name: "Andorra", flagUrl: "https://flagcdn.com/w20/ad.png" },
    { code: "ao", name: "Angola", flagUrl: "https://flagcdn.com/w20/ao.png" },
    { code: "ai", name: "Anguilla", flagUrl: "https://flagcdn.com/w20/ai.png" },
    { code: "aq", name: "Antarctica", flagUrl: "https://flagcdn.com/w20/aq.png" },
    { code: "ag", name: "Antigua and Barbuda", flagUrl: "https://flagcdn.com/w20/ag.png" },
    { code: "ar", name: "Argentina", flagUrl: "https://flagcdn.com/w20/ar.png" },
    { code: "am", name: "Armenia", flagUrl: "https://flagcdn.com/w20/am.png" },
    { code: "aw", name: "Aruba", flagUrl: "https://flagcdn.com/w20/aw.png" },
    { code: "au", name: "Australia", flagUrl: "https://flagcdn.com/w20/au.png" },
    { code: "at", name: "Austria", flagUrl: "https://flagcdn.com/w20/at.png" },
    { code: "az", name: "Azerbaijan", flagUrl: "https://flagcdn.com/w20/az.png" },
    { code: "bs", name: "Bahamas", flagUrl: "https://flagcdn.com/w20/bs.png" },
    { code: "bh", name: "Bahrain", flagUrl: "https://flagcdn.com/w20/bh.png" },
    { code: "bd", name: "Bangladesh", flagUrl: "https://flagcdn.com/w20/bd.png" },
    { code: "bb", name: "Barbados", flagUrl: "https://flagcdn.com/w20/bb.png" },
    { code: "by", name: "Belarus", flagUrl: "https://flagcdn.com/w20/by.png" },
    { code: "be", name: "Belgium", flagUrl: "https://flagcdn.com/w20/be.png" },
    { code: "bz", name: "Belize", flagUrl: "https://flagcdn.com/w20/bz.png" },
    { code: "bj", name: "Benin", flagUrl: "https://flagcdn.com/w20/bj.png" },
    { code: "bm", name: "Bermuda", flagUrl: "https://flagcdn.com/w20/bm.png" },
    { code: "bt", name: "Bhutan", flagUrl: "https://flagcdn.com/w20/bt.png" },
    { code: "bo", name: "Bolivia", flagUrl: "https://flagcdn.com/w20/bo.png" },
    { code: "ba", name: "Bosnia and Herzegovina", flagUrl: "https://flagcdn.com/w20/ba.png" },
    { code: "bw", name: "Botswana", flagUrl: "https://flagcdn.com/w20/bw.png" },
    { code: "br", name: "Brazil", flagUrl: "https://flagcdn.com/w20/br.png" },
    { code: "bn", name: "Brunei", flagUrl: "https://flagcdn.com/w20/bn.png" },
    { code: "bg", name: "Bulgaria", flagUrl: "https://flagcdn.com/w20/bg.png" },
    { code: "bf", name: "Burkina Faso", flagUrl: "https://flagcdn.com/w20/bf.png" },
    { code: "bi", name: "Burundi", flagUrl: "https://flagcdn.com/w20/bi.png" },
    { code: "cv", name: "Cabo Verde", flagUrl: "https://flagcdn.com/w20/cv.png" },
    { code: "kh", name: "Cambodia", flagUrl: "https://flagcdn.com/w20/kh.png" },
    { code: "cm", name: "Cameroon", flagUrl: "https://flagcdn.com/w20/cm.png" },
    { code: "ca", name: "Canada", flagUrl: "https://flagcdn.com/w20/ca.png" },
    { code: "ky", name: "Cayman Islands", flagUrl: "https://flagcdn.com/w20/ky.png" },
    { code: "cf", name: "Central African Republic", flagUrl: "https://flagcdn.com/w20/cf.png" },
    { code: "td", name: "Chad", flagUrl: "https://flagcdn.com/w20/td.png" },
    { code: "cl", name: "Chile", flagUrl: "https://flagcdn.com/w20/cl.png" },
    { code: "cn", name: "China", flagUrl: "https://flagcdn.com/w20/cn.png" },
    { code: "co", name: "Colombia", flagUrl: "https://flagcdn.com/w20/co.png" },
    { code: "km", name: "Comoros", flagUrl: "https://flagcdn.com/w20/km.png" },
    { code: "cg", name: "Congo (Brazzaville)", flagUrl: "https://flagcdn.com/w20/cg.png" },
    { code: "cd", name: "Congo (Kinshasa)", flagUrl: "https://flagcdn.com/w20/cd.png" },
    { code: "cr", name: "Costa Rica", flagUrl: "https://flagcdn.com/w20/cr.png" },
    { code: "ci", name: "Côte d'Ivoire", flagUrl: "https://flagcdn.com/w20/ci.png" },
    { code: "hr", name: "Croatia", flagUrl: "https://flagcdn.com/w20/hr.png" },
    { code: "cu", name: "Cuba", flagUrl: "https://flagcdn.com/w20/cu.png" },
    { code: "cy", name: "Cyprus", flagUrl: "https://flagcdn.com/w20/cy.png" },
    { code: "cz", name: "Czech Republic", flagUrl: "https://flagcdn.com/w20/cz.png" },
    { code: "dk", name: "Denmark", flagUrl: "https://flagcdn.com/w20/dk.png" },
    { code: "dj", name: "Djibouti", flagUrl: "https://flagcdn.com/w20/dj.png" },
    { code: "dm", name: "Dominica", flagUrl: "https://flagcdn.com/w20/dm.png" },
    { code: "do", name: "Dominican Republic", flagUrl: "https://flagcdn.com/w20/do.png" },
    { code: "ec", name: "Ecuador", flagUrl: "https://flagcdn.com/w20/ec.png" },
    { code: "eg", name: "Egypt", flagUrl: "https://flagcdn.com/w20/eg.png" },
    { code: "sv", name: "El Salvador", flagUrl: "https://flagcdn.com/w20/sv.png" },
    { code: "gq", name: "Equatorial Guinea", flagUrl: "https://flagcdn.com/w20/gq.png" },
    { code: "er", name: "Eritrea", flagUrl: "https://flagcdn.com/w20/er.png" },
    { code: "ee", name: "Estonia", flagUrl: "https://flagcdn.com/w20/ee.png" },
    { code: "sz", name: "Eswatini", flagUrl: "https://flagcdn.com/w20/sz.png" },
    { code: "et", name: "Ethiopia", flagUrl: "https://flagcdn.com/w20/et.png" },
    { code: "fj", name: "Fiji", flagUrl: "https://flagcdn.com/w20/fj.png" },
    { code: "fi", name: "Finland", flagUrl: "https://flagcdn.com/w20/fi.png" },
    { code: "fr", name: "France", flagUrl: "https://flagcdn.com/w20/fr.png" },
    { code: "ga", name: "Gabon", flagUrl: "https://flagcdn.com/w20/ga.png" },
    { code: "gm", name: "Gambia", flagUrl: "https://flagcdn.com/w20/gm.png" },
    { code: "ge", name: "Georgia", flagUrl: "https://flagcdn.com/w20/ge.png" },
    { code: "de", name: "Germany", flagUrl: "https://flagcdn.com/w20/de.png" },
    { code: "gh", name: "Ghana", flagUrl: "https://flagcdn.com/w20/gh.png" },
    { code: "gi", name: "Gibraltar", flagUrl: "https://flagcdn.com/w20/gi.png" },
    { code: "gr", name: "Greece", flagUrl: "https://flagcdn.com/w20/gr.png" },
    { code: "gl", name: "Greenland", flagUrl: "https://flagcdn.com/w20/gl.png" },
    { code: "gd", name: "Grenada", flagUrl: "https://flagcdn.com/w20/gd.png" },
    { code: "gu", name: "Guam", flagUrl: "https://flagcdn.com/w20/gu.png" },
    { code: "gt", name: "Guatemala", flagUrl: "https://flagcdn.com/w20/gt.png" },
    { code: "gn", name: "Guinea", flagUrl: "https://flagcdn.com/w20/gn.png" },
    { code: "gw", name: "Guinea-Bissau", flagUrl: "https://flagcdn.com/w20/gw.png" },
    { code: "gy", name: "Guyana", flagUrl: "https://flagcdn.com/w20/gy.png" },
    { code: "ht", name: "Haiti", flagUrl: "https://flagcdn.com/w20/ht.png" },
    { code: "hn", name: "Honduras", flagUrl: "https://flagcdn.com/w20/hn.png" },
    { code: "hk", name: "Hong Kong", flagUrl: "https://flagcdn.com/w20/hk.png" },
    { code: "hu", name: "Hungary", flagUrl: "https://flagcdn.com/w20/hu.png" },
    { code: "is", name: "Iceland", flagUrl: "https://flagcdn.com/w20/is.png" },
    { code: "in", name: "India", flagUrl: "https://flagcdn.com/w20/in.png" },
    { code: "id", name: "Indonesia", flagUrl: "https://flagcdn.com/w20/id.png" },
    { code: "ir", name: "Iran", flagUrl: "https://flagcdn.com/w20/ir.png" },
    { code: "iq", name: "Iraq", flagUrl: "https://flagcdn.com/w20/iq.png" },
    { code: "ie", name: "Ireland", flagUrl: "https://flagcdn.com/w20/ie.png" },
    { code: "il", name: "Israel", flagUrl: "https://flagcdn.com/w20/il.png" },
    { code: "it", name: "Italy", flagUrl: "https://flagcdn.com/w20/it.png" },
    { code: "jm", name: "Jamaica", flagUrl: "https://flagcdn.com/w20/jm.png" },
    { code: "jp", name: "Japan", flagUrl: "https://flagcdn.com/w20/jp.png" },
    { code: "jo", name: "Jordan", flagUrl: "https://flagcdn.com/w20/jo.png" },
    { code: "kz", name: "Kazakhstan", flagUrl: "https://flagcdn.com/w20/kz.png" },
    { code: "ke", name: "Kenya", flagUrl: "https://flagcdn.com/w20/ke.png" },
    { code: "ki", name: "Kiribati", flagUrl: "https://flagcdn.com/w20/ki.png" },
    { code: "kp", name: "North Korea", flagUrl: "https://flagcdn.com/w20/kp.png" },
    { code: "kr", name: "South Korea", flagUrl: "https://flagcdn.com/w20/kr.png" },
    { code: "kw", name: "Kuwait", flagUrl: "https://flagcdn.com/w20/kw.png" },
    { code: "kg", name: "Kyrgyzstan", flagUrl: "https://flagcdn.com/w20/kg.png" },
    { code: "la", name: "Laos", flagUrl: "https://flagcdn.com/w20/la.png" },
    { code: "lv", name: "Latvia", flagUrl: "https://flagcdn.com/w20/lv.png" },
    { code: "lb", name: "Lebanon", flagUrl: "https://flagcdn.com/w20/lb.png" },
    { code: "ls", name: "Lesotho", flagUrl: "https://flagcdn.com/w20/ls.png" },
    { code: "lr", name: "Liberia", flagUrl: "https://flagcdn.com/w20/lr.png" },
    { code: "ly", name: "Libya", flagUrl: "https://flagcdn.com/w20/ly.png" },
    { code: "li", name: "Liechtenstein", flagUrl: "https://flagcdn.com/w20/li.png" },
    { code: "lt", name: "Lithuania", flagUrl: "https://flagcdn.com/w20/lt.png" },
    { code: "lu", name: "Luxembourg", flagUrl: "https://flagcdn.com/w20/lu.png" },
    { code: "mo", name: "Macao", flagUrl: "https://flagcdn.com/w20/mo.png" },
    { code: "mg", name: "Madagascar", flagUrl: "https://flagcdn.com/w20/mg.png" },
    { code: "mw", name: "Malawi", flagUrl: "https://flagcdn.com/w20/mw.png" },
    { code: "my", name: "Malaysia", flagUrl: "https://flagcdn.com/w20/my.png" },
    { code: "mv", name: "Maldives", flagUrl: "https://flagcdn.com/w20/mv.png" },
    { code: "ml", name: "Mali", flagUrl: "https://flagcdn.com/w20/ml.png" },
    { code: "mt", name: "Malta", flagUrl: "https://flagcdn.com/w20/mt.png" },
    { code: "mh", name: "Marshall Islands", flagUrl: "https://flagcdn.com/w20/mh.png" },
    { code: "mr", name: "Mauritania", flagUrl: "https://flagcdn.com/w20/mr.png" },
    { code: "mu", name: "Mauritius", flagUrl: "https://flagcdn.com/w20/mu.png" },
    { code: "mx", name: "Mexico", flagUrl: "https://flagcdn.com/w20/mx.png" },
    { code: "fm", name: "Micronesia", flagUrl: "https://flagcdn.com/w20/fm.png" },
    { code: "md", name: "Moldova", flagUrl: "https://flagcdn.com/w20/md.png" },
    { code: "mc", name: "Monaco", flagUrl: "https://flagcdn.com/w20/mc.png" },
    { code: "mn", name: "Mongolia", flagUrl: "https://flagcdn.com/w20/mn.png" },
    { code: "me", name: "Montenegro", flagUrl: "https://flagcdn.com/w20/me.png" },
    { code: "ma", name: "Morocco", flagUrl: "https://flagcdn.com/w20/ma.png" },
    { code: "mz", name: "Mozambique", flagUrl: "https://flagcdn.com/w20/mz.png" },
    { code: "mm", name: "Myanmar", flagUrl: "https://flagcdn.com/w20/mm.png" },
    { code: "na", name: "Namibia", flagUrl: "https://flagcdn.com/w20/na.png" },
    { code: "nr", name: "Nauru", flagUrl: "https://flagcdn.com/w20/nr.png" },
    { code: "np", name: "Nepal", flagUrl: "https://flagcdn.com/w20/np.png" },
    { code: "nl", name: "Netherlands", flagUrl: "https://flagcdn.com/w20/nl.png" },
    { code: "nz", name: "New Zealand", flagUrl: "https://flagcdn.com/w20/nz.png" },
    { code: "ni", name: "Nicaragua", flagUrl: "https://flagcdn.com/w20/ni.png" },
    { code: "ne", name: "Niger", flagUrl: "https://flagcdn.com/w20/ne.png" },
    { code: "ng", name: "Nigeria", flagUrl: "https://flagcdn.com/w20/ng.png" },
    { code: "mk", name: "North Macedonia", flagUrl: "https://flagcdn.com/w20/mk.png" },
    { code: "no", name: "Norway", flagUrl: "https://flagcdn.com/w20/no.png" },
    { code: "om", name: "Oman", flagUrl: "https://flagcdn.com/w20/om.png" },
    { code: "pk", name: "Pakistan", flagUrl: "https://flagcdn.com/w20/pk.png" },
    { code: "pw", name: "Palau", flagUrl: "https://flagcdn.com/w20/pw.png" },
    { code: "ps", name: "Palestine", flagUrl: "https://flagcdn.com/w20/ps.png" },
    { code: "pa", name: "Panama", flagUrl: "https://flagcdn.com/w20/pa.png" },
    { code: "pg", name: "Papua New Guinea", flagUrl: "https://flagcdn.com/w20/pg.png" },
    { code: "py", name: "Paraguay", flagUrl: "https://flagcdn.com/w20/py.png" },
    { code: "pe", name: "Peru", flagUrl: "https://flagcdn.com/w20/pe.png" },
    { code: "ph", name: "Philippines", flagUrl: "https://flagcdn.com/w20/ph.png" },
    { code: "pl", name: "Poland", flagUrl: "https://flagcdn.com/w20/pl.png" },
    { code: "pt", name: "Portugal", flagUrl: "https://flagcdn.com/w20/pt.png" },
    { code: "qa", name: "Qatar", flagUrl: "https://flagcdn.com/w20/qa.png" },
    { code: "ro", name: "Romania", flagUrl: "https://flagcdn.com/w20/ro.png" },
    { code: "ru", name: "Russia", flagUrl: "https://flagcdn.com/w20/ru.png" },
    { code: "rw", name: "Rwanda", flagUrl: "https://flagcdn.com/w20/rw.png" },
    { code: "kn", name: "Saint Kitts and Nevis", flagUrl: "https://flagcdn.com/w20/kn.png" },
    { code: "lc", name: "Saint Lucia", flagUrl: "https://flagcdn.com/w20/lc.png" },
    { code: "vc", name: "Saint Vincent and the Grenadines", flagUrl: "https://flagcdn.com/w20/vc.png" },
    { code: "ws", name: "Samoa", flagUrl: "https://flagcdn.com/w20/ws.png" },
    { code: "sm", name: "San Marino", flagUrl: "https://flagcdn.com/w20/sm.png" },
    { code: "st", name: "Sao Tome and Principe", flagUrl: "https://flagcdn.com/w20/st.png" },
    { code: "sa", name: "Saudi Arabia", flagUrl: "https://flagcdn.com/w20/sa.png" },
    { code: "sn", name: "Senegal", flagUrl: "https://flagcdn.com/w20/sn.png" },
    { code: "rs", name: "Serbia", flagUrl: "https://flagcdn.com/w20/rs.png" },
    { code: "sc", name: "Seychelles", flagUrl: "https://flagcdn.com/w20/sc.png" },
    { code: "sl", name: "Sierra Leone", flagUrl: "https://flagcdn.com/w20/sl.png" },
    { code: "sg", name: "Singapore", flagUrl: "https://flagcdn.com/w20/sg.png" },
    { code: "sk", name: "Slovakia", flagUrl: "https://flagcdn.com/w20/sk.png" },
    { code: "si", name: "Slovenia", flagUrl: "https://flagcdn.com/w20/si.png" },
    { code: "sb", name: "Solomon Islands", flagUrl: "https://flagcdn.com/w20/sb.png" },
    { code: "so", name: "Somalia", flagUrl: "https://flagcdn.com/w20/so.png" },
    { code: "za", name: "South Africa", flagUrl: "https://flagcdn.com/w20/za.png" },
    { code: "ss", name: "South Sudan", flagUrl: "https://flagcdn.com/w20/ss.png" },
    { code: "es", name: "Spain", flagUrl: "https://flagcdn.com/w20/es.png" },
    { code: "lk", name: "Sri Lanka", flagUrl: "https://flagcdn.com/w20/lk.png" },
    { code: "sd", name: "Sudan", flagUrl: "https://flagcdn.com/w20/sd.png" },
    { code: "sr", name: "Suriname", flagUrl: "https://flagcdn.com/w20/sr.png" },
    { code: "sz", name: "Eswatini", flagUrl: "https://flagcdn.com/w20/sz.png" },
    { code: "se", name: "Sweden", flagUrl: "https://flagcdn.com/w20/se.png" },
    { code: "ch", name: "Switzerland", flagUrl: "https://flagcdn.com/w20/ch.png" },
    { code: "sy", name: "Syria", flagUrl: "https://flagcdn.com/w20/sy.png" },
    { code: "tw", name: "Taiwan", flagUrl: "https://flagcdn.com/w20/tw.png" },
    { code: "tj", name: "Tajikistan", flagUrl: "https://flagcdn.com/w20/tj.png" },
    { code: "tz", name: "Tanzania", flagUrl: "https://flagcdn.com/w20/tz.png" },
    { code: "th", name: "Thailand", flagUrl: "https://flagcdn.com/w20/th.png" },
    { code: "tl", name: "Timor-Leste", flagUrl: "https://flagcdn.com/w20/tl.png" },
    { code: "tg", name: "Togo", flagUrl: "https://flagcdn.com/w20/tg.png" },
    { code: "to", name: "Tonga", flagUrl: "https://flagcdn.com/w20/to.png" },
    { code: "tt", name: "Trinidad and Tobago", flagUrl: "https://flagcdn.com/w20/tt.png" },
    { code: "tn", name: "Tunisia", flagUrl: "https://flagcdn.com/w20/tn.png" },
    { code: "tr", name: "Turkey", flagUrl: "https://flagcdn.com/w20/tr.png" },
    { code: "tm", name: "Turkmenistan", flagUrl: "https://flagcdn.com/w20/tm.png" },
    { code: "tv", name: "Tuvalu", flagUrl: "https://flagcdn.com/w20/tv.png" },
    { code: "ug", name: "Uganda", flagUrl: "https://flagcdn.com/w20/ug.png" },
    { code: "ua", name: "Ukraine", flagUrl: "https://flagcdn.com/w20/ua.png" },
    { code: "ae", name: "United Arab Emirates", flagUrl: "https://flagcdn.com/w20/ae.png" },
    { code: "gb", name: "United Kingdom", flagUrl: "https://flagcdn.com/w20/gb.png" },
    { code: "us", name: "United States", flagUrl: "https://flagcdn.com/w20/us.png" },
    { code: "uy", name: "Uruguay", flagUrl: "https://flagcdn.com/w20/uy.png" },
    { code: "uz", name: "Uzbekistan", flagUrl: "https://flagcdn.com/w20/uz.png" },
    { code: "vu", name: "Vanuatu", flagUrl: "https://flagcdn.com/w20/vu.png" },
    { code: "va", name: "Vatican City", flagUrl: "https://flagcdn.com/w20/va.png" },
    { code: "ve", name: "Venezuela", flagUrl: "https://flagcdn.com/w20/ve.png" },
    { code: "vn", name: "Vietnam", flagUrl: "https://flagcdn.com/w20/vn.png" },
    { code: "ye", name: "Yemen", flagUrl: "https://flagcdn.com/w20/ye.png" },
    { code: "zm", name: "Zambia", flagUrl: "https://flagcdn.com/w20/zm.png" },
    { code: "zw", name: "Zimbabwe", flagUrl: "https://flagcdn.com/w20/zw.png" }]
  

function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleChange = (event:ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = event.target.value;
    const country = countries.find((c) => c.code === selectedCode)!;
    setSelectedCountry(country);
  };

  return (
    <div className="country-select flex h-auto">
      <div
        className="flag flex justify-center items-center w-12 h-auto rounded-l-md border bg-white"
        
      >
        <img src={selectedCountry.flagUrl} alt={selectedCountry.code} />
      </div>
      <select
        value={selectedCountry.code}
        onChange={handleChange}
        className="border border-l-0 p-2 w-full rounded-r-md bg-white"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountrySelector;
