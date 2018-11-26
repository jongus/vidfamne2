import React from "react";
import Layout from "../components/layout";
import { Row, Box } from "../components/lgm-grid.js";
import Helmet from "react-helmet";
import config from "../utils/config";
import { Link } from "gatsby";

export default props => (
  <Layout myPath={props.location.pathname}>
    <Helmet>
      <meta name="Description" content={config.name + " - homepage"} />
      <title>{config.name} - homepage</title>
      <meta property="og:title" content={config.name + " - homepage"} />
      <meta property="og:description" content="Page content description" />
      <meta property="og:url" content={config.url + props.location.pathname} />
      <meta property="og:image" content={config.url + "/social_share.jpg"} />
    </Helmet>
    <Row backgroundcolor="#e6dbc9">
      <Box>
        <h1>SVERA EDU</h1>
        <p>
          {console.log("index props", props)}
          Här kommer ett eller flera stycken som beskriver denna tjänst.
          Chambray DIY meditation, flannel activated charcoal lomo church-key
          roof party poke drinking vinegar PBR&B pour-over tumeric affogato.
          Selfies listicle semiotics typewriter, cloud bread venmo tbh meggings
          tousled succulents. Pok pok ramps schlitz you probably haven't heard
          of them actually, post-ironic fixie seitan lo-fi ethical. Thundercats
          banh mi cardigan meggings kale chips.
        </p>
        <p>
          Tousled unicorn kogi +1 messenger bag, cold-pressed post-ironic XOXO.
          Squid next level VHS portland cray, umami crucifix hoodie gastropub
          schlitz chillwave taxidermy hot chicken copper mug. Glossier cornhole
          bushwick YOLO twee paleo, food truck marfa hella brunch williamsburg
          waistcoat literally vice kitsch. Roof party photo booth beard
          fingerstache tumeric YOLO snackwave skateboard.{" "}
        </p>
      </Box>
    </Row>
    <Row backgroundcolor="#c53211">
      <Box gridcolumn="2/4">
        <img
          src="https://res.cloudinary.com/jongus/image/upload/c_scale,f_auto,q_auto:eco,w_768/v1536178421/sky-earth-space-working.jpg"
          width="100%"
        />
      </Box>
      <Box color="#e6dbc9" gridcolumn="4/8">
        <h2>Namnet på en kurs</h2>
        <p>
          Occupy vice cloud bread, truffaut four dollar toast tofu iceland.
          Adaptogen wolf photo booth mixtape edison bulb, chia knausgaard
          waistcoat tacos man bun schlitz kitsch dreamcatcher.
        </p>
        <p>
          För att kunna delta i kursen måste du vara inloggad. Följ bara länken
          så kommer du efter att du loggat in till kursen.
        </p>
        <p>
          <Link to="/">Grundkurs för funktionärer</Link>
        </p>
      </Box>
    </Row>
    <Row backgroundcolor="#f7b733">
      <Box gridcolumn="2/4">
        <img
          src="https://res.cloudinary.com/jongus/image/upload/c_scale,f_auto,q_auto:eco,w_768/v1536178422/pexels-photo-1273443.jpg"
          width="100%"
        />
      </Box>
      <Box gridcolumn="4/8">
        <h2>Namnet på en annan kurs</h2>
        <p>
          Occupy vice cloud bread, truffaut four dollar toast tofu iceland.
          Adaptogen wolf photo booth mixtape edison bulb, chia knausgaard
          waistcoat tacos man bun schlitz kitsch dreamcatcher. Truffaut neutra
          tbh, tote bag trust fund semiotics pour-over master cleanse
          gluten-free seitan. Brunch pour-over chicharrones fashion axe bitters
          pug etsy. Authentic tumeric four dollar toast, succulents austin
          chicharrones 90's ethical.
        </p>
      </Box>
    </Row>
    <Row backgroundcolor="#e6dbc9">
      <Box>
        <p>
          You probably haven't heard of them sartorial succulents jean shorts
          schlitz listicle hell of cred crucifix lo-fi vinyl echo park synth
          glossier irony. Letterpress iceland you probably haven't heard of them
          craft beer before they sold out poutine taiyaki etsy lomo meggings
          8-bit fixie everyday carry vexillologist. Coloring book ethical migas,
          succulents YOLO wolf snackwave meditation. Narwhal intelligentsia vape
          food truck.
        </p>
      </Box>
    </Row>
  </Layout>
);
