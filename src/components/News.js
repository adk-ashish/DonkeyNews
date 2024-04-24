import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "cbc-news",
        name: "CBC News",
      },
      author: "CBC News",
      title:
        "As Russia presses forward, Ukraine pleads with Canada for armour, air defence | CBC News",
      description:
        "A leading member of the Ukrainian parliament delivered stark warnings to Canadian politicians and top defence officials this week in a series of mostly under-the-radar meetings in Ottawa ahead of the long-anticipated aid vote in the U.S. Congress.",
      url: "http://www.cbc.ca/news/politics/oleksandra-ustinova-ukraine-russia-freeland-budget-1.7179373",
      urlToImage:
        "https://i.cbc.ca/1.7179497.1713559032!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/russia-ukraine-war-washington.jpg",
      publishedAt: "2024-04-20T08:07:23.305739Z",
      content:
        "A leading member of the Ukrainian parliament delivered stark warnings to Canadian politicians and top defence officials this week in a series of mostly under-the-radar meetings in Ottawa ahead of the… [+5665 chars]",
    },
    {
      source: {
        id: "bild",
        name: "Bild",
      },
      author: "BILD",
      title:
        "Direkt nach Schlusspfiff: Polizei nimmt Nationaltorwart auf dem Platz fest! | Sport",
      description: "Dieser Torwart wird wegen einer Umarmung verhaftet!",
      url: "https://www.bild.de/sport/fussball/direkt-nach-schlusspfiff-iran-polizei-nimmt-nationaltorwart-auf-dem-platz-fest-66225657714ff462fada5892",
      urlToImage:
        "https://images.bild.de/66225657714ff462fada5892/1113e71ee1d4ffba17513acb7a884a61,cd23f71a?w=1280",
      publishedAt: "2024-04-20T08:02:36Z",
      content:
        "Mehr zum Video anzeigen \r\nDieser Torwart wird wegen einer Umarmung verhaftet! \r\nQuelle: @iranintlsport X20.04.2024 - 10:02 Uhr",
    },
    {
      source: {
        id: "techradar",
        name: "TechRadar",
      },
      author:
        "Hamish Hector, Timothy Coleman, Becky Scarrott, Al Griffin, Mark Wilson, Lance Ulanoff",
      title:
        "ICYMI: the 8 biggest tech news stories from Boston Dynamic's new robot to Sony's OLED-beating Micro-LED TV tech",
      description: "Here's your firmware update for April 20, 2024",
      url: "https://www.techradar.com/tech/icymi-the-8-biggest-tech-news-stories-from-boston-dynamics-new-robot-to-sonys-oled-beating-micro-led-tv-tech",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/sECna6wr33DMtmR5YVdNwe-1200-80.png",
      publishedAt: "2024-04-20T07:00:50Z",
      content:
        "This week in the world of tech: Boston Dynamics unveiled a new robot, and while it terrified us, the barrage of negative Humane AI Pin reviews showed us that maybe the artificial intelligence uprisin… [+7896 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title: "Russia-Ukraine war: List of key events, day 786",
      description:
        "As the war enters its 786th day, these are the main developments.",
      url: "https://www.aljazeera.com/news/2024/4/20/russia-ukraine-war-list-of-key-events-day-786",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2024/04/2024-04-19T144531Z_1550224752_RC2K97AWPB8T_RTRMADP_3_UKRAINE-CRISIS-CHASIV-YAR-1713594342.jpg?resize=1920%2C1440",
      publishedAt: "2024-04-20T06:47:25Z",
      content:
        "Here is the situation on Saturday, April 20, 2024.\r\nFighting\r\n<ul><li>Russias Ministry of Defence reported Ukrainian drone strikes overnight and into Saturday. It said 26 drones were detected over th… [+2342 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Steve Hendrix",
      title:
        "A team of bitter rivals is making Israel’s most crucial war decisions",
      description:
        "Israel’s powerful war cabinet was formed hastily after the Oct. 7 attacks. It consists of just five men — most of whom are bitter rivals.",
      url: "https://www.washingtonpost.com/world/2024/04/20/israel-war-cabinet-iran-netanyahu-gallant-gantz/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WMN5GCH6KCP2QH6LJKIPX2FNKQ_size-normalized.jpg&w=1440",
      publishedAt: "2024-04-20T06:00:00Z",
      content:
        "JERUSALEM As Israel mulled a response to Irans massive drone and missile attack, the decision to strike with a carefully calibrated limited strike early Friday was made by just five men.\r\nThey are th… [+7666 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "SAMYA KULLAB",
      title:
        "As Russia edges toward a possible offensive on Kharkiv, some residents flee. Others refuse to leave",
      description:
        "KHARKIV, Ukraine (AP) — A 79-year-old woman makes the sign of the cross and, gripping her cane, leaves her home in a quaint village in northeast Ukraine. Torn screens, shattered glass and scorched trees litter the yard of Olha Faichuk's apartment building in …",
      url: "https://apnews.com/751d368a403127f2cc0e6e6e5fd43d15",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/922a1853aeb34bf7acc6b26e8e50be4a/3000.jpeg",
      publishedAt: "2024-04-20T05:57:04Z",
      content:
        "KHARKIV, Ukraine (AP) — A 79-year-old woman makes the sign of the cross and, gripping her cane, leaves her home in a quaint village in northeast Ukraine. Torn screens, shattered glass and scorched tr… [+6646 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Ellen Nakashima, Shane Harris",
      title:
        "Congress extends controversial warrantless surveillance law for two years",
      description:
        "U.S. spy agencies regard the Foreign Intelligence Surveillance Act as one of their most valuable intelligence-collection tools, but critics say it intrudes on Americans’ privacy.",
      url: "https://www.washingtonpost.com/national-security/2024/04/20/congress-extends-controversial-warrantless-surveillance-law-two-years/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KZ2KCINI7SHVLKOHDTBIGPPS4Q_size-normalized.jpg&w=1440",
      publishedAt: "2024-04-20T04:47:12Z",
      content:
        "Laboring into the early hours of Saturday morning, Congress in a 60-34 vote squeaked through the renewal of a surveillance program that U.S. spy agencies regard as one of their most valuable tools an… [+7574 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "GENE JOHNSON",
      title:
        "The drug war devastated Black and other minority communities. Is marijuana legalization helping?",
      description:
        "ARLINGTON, Wash. (AP) — When Washington state opened some of the nation's first legal marijuana stores in 2014, Sam Ward Jr.",
      url: "https://apnews.com/45efa08a04116a747aba2f1c13187944",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/8e18167d9650400d9f7316836fd996dd/3000.jpeg",
      publishedAt: "2024-04-20T04:22:57Z",
      content:
        "ARLINGTON, Wash. (AP) — When Washington state opened some of the nation's first legal marijuana stores in 2014, Sam Ward Jr. was on electronic home detention in Spokane, where he had been indicted on… [+7578 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Ukraine Russia war: US Congress close to passing long-awaited aid",
      description:
        "A huge $61bn support package that could help reshape Kyiv's war effort will go to a vote in coming days.",
      url: "https://www.bbc.co.uk/news/world-us-canada-68848277",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/16259/production/_133131709_gettyimages-1252073596.jpg",
      publishedAt: "2024-04-20T03:37:14.943774Z",
      content:
        "After months of delay, the US House of Representatives is poised to hold a vote on tens of billions of dollars in American military aid for Ukraine and Israel this weekend.\r\nBoth measures have vocal … [+5702 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Mike Colias",
      title: "VW Workers Vote to Join UAW in Historic Southern Win for Union",
      description:
        "Victory at Tennessee factory helps union toward goal of reversing declining membership by organizing foreign-owned factories",
      url: "https://www.wsj.com/business/autos/vw-factory-tennessee-union-results-uaw-00cbeffb?mod=hp_lead_pos2",
      urlToImage: "https://images.wsj.net/im-951499/social",
      publishedAt: "2024-04-20T02:47:00Z",
      content: null,
    },
    {
      source: {
        id: "financial-post",
        name: "Financial Post",
      },
      author: null,
      title:
        "Canadian dollar could 'crater' if Bank of Canada cuts faster and deeper than the Fed, say economists",
      description:
        "Canadian dollar will fall if the Bank of Canada cuts interest rates sooner and deeper than the Fed, warn economists. Read more on the loonie",
      url: "https://financialpost.com/news/economy/canadian-dollar-could-crater-if-bank-of-canada-cuts-more-than-fed",
      urlToImage:
        "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2024/04/canadian-dollar-0415-ph.jpg",
      publishedAt: "2024-04-20T02:07:11.8666028Z",
      content:
        "This year has not been kind to the loonie, and it's about to get worse\r\nThe Canadian dollar could sink as low as 70 US cents this year if the Bank of Canada cuts interest rates more than the Fed, say… [+7574 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title:
        "North Korea conducts test on new ‘super-large warhead’: State media",
      description:
        "Pyongyang says new warhead designed for cruise missiles, adding that a new anti-aircraft rocket was also tested.",
      url: "https://www.aljazeera.com/news/2024/4/20/north-korea-conducts-test-on-new-super-large-warhead-state-media",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2024/04/AP24111002621882-1713573841.jpg?resize=1920%2C1440",
      publishedAt: "2024-04-20T01:29:46Z",
      content:
        "North Korea has conducted a test on a super-large warhead designed for a strategic cruise missile, state media reports, adding that it also launched a new type of anti-aircraft missile.\r\nThe DPRK Mis… [+1934 chars]",
    },
    {
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "1970-01-01T00:00:00Z",
      content: "[Removed]",
    },
    {
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "1970-01-01T00:00:00Z",
      content: "[Removed]",
    },
    {
      source: {
        id: "google-news-ca",
        name: "Google News (Canada)",
      },
      author: "The Globe and Mail",
      title:
        "Premiers warn against Ottawa encroaching on provincial jurisdiction - The Globe and Mail",
      description: null,
      url: "https://news.google.com/rss/articles/CBMic2h0dHBzOi8vd3d3LnRoZWdsb2JlYW5kbWFpbC5jb20vY2FuYWRhL2FydGljbGUtcHJlbWllcnMtd2Fybi1hZ2FpbnN0LW90dGF3YS1lbmNyb2FjaGluZy1vbi1wcm92aW5jaWFsLWp1cmlzZGljdGlvbi_SAQA?oc=5",
      urlToImage: null,
      publishedAt: "2024-04-20T00:06:08+00:00",
      content: null,
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Ted Regencia",
      title:
        "Israel’s war on Gaza live: Israelis continue intense raid on Nur Shams camp",
      description:
        "Teenager among 5 killed in ongoing Israeli military raid on Nur Shams refugee camp in occupied West Bank’s Tulkarem.",
      url: "https://www.aljazeera.com/news/liveblog/2024/4/20/israels-war-on-gaza-live-israelis-continue-intense-raid-on-nur-shams-camp",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2024/04/2024-04-19T173635Z_1606096621_RC2T97A8HTNO_RTRMADP_3_ISRAEL-PALESTINIANS-WEST-BANK-RAID-1-1713569942.jpg?resize=1920%2C1440",
      publishedAt: "2024-04-20T00:00:42Z",
      content:
        "blinking-dot\r\nLive updatesLive updates, \r\nTeenager among 5 killed in ongoing Israeli military raid on Nur Shams refugee camp in occupied West Banks Tulkarem.",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "KIM TONG-HYUNG Associated Press",
      title:
        "North Korea says it tested 'super-large' cruise missile warhead and new anti-aircraft missile",
      description:
        "North Korea says it tested a “super-large” cruise missile warhead and a new anti-aircraft missile in a western coastal area as it expands its military capabilities in the face of deepening tensions with the United States and South Korea",
      url: "https://abcnews.go.com/International/wireStory/north-korea-tested-super-large-cruise-missile-warhead-109444125",
      urlToImage:
        "https://i.abcnewsfe.com/a/f7cc1006-9747-4c68-a0b6-70c333bf054b/wirestory_2779ebc8507743fcfd12e43c505f86ca_16x9.jpg?w=1600",
      publishedAt: "2024-04-20T00:00:08Z",
      content:
        "SEOUL, South Korea -- North Korea said Saturday it tested a super-large cruise missile warhead and a new anti-aircraft missile in a western coastal area as it expands military capabilities in the fac… [+1985 chars]",
    },
    {
      source: {
        id: "newsweek",
        name: "Newsweek",
      },
      author: "Kaitlin Lewis",
      title:
        "Ukraine Spent Week Planning Ambush of Russian Tu-22M3 Bomber: Official",
      description:
        "Kyiv's air force downed one of Russia's strategic bombers Friday for the first time since the war broke out in February 2022.",
      url: "https://www.newsweek.com/ukraine-spent-week-planning-ambus-russian-bomber-1892355",
      urlToImage:
        "https://d.newsweek.com/en/full/2381199/ukraine-spent-week-planning-ambush-russianbomber.jpg",
      publishedAt: "2024-04-19T22:30:27Z",
      content:
        "Kyiv's air force was on high alert for a week before launching its attack that took down a Russian Tu-22M3 bomber overnight Friday, according to the head of the Main Intelligence Directorate of Ukrai… [+3167 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "The Associated Press",
      title: "An Alabama prison warden is arrested on drug charges",
      description:
        "The warden of an Alabama prison was arrested Friday on drug charges",
      url: "https://abcnews.go.com/US/wireStory/alabama-prison-warden-arrested-drug-charges-109441856",
      urlToImage:
        "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
      publishedAt: "2024-04-19T22:14:20Z",
      content:
        "ATHENS, Ala. -- The warden of an Alabama prison was arrested Friday on drug charges, officials with the state prison system confirmed. \r\nChadwick Crabtree, the warden at Limestone Correctional Facili… [+948 chars]",
    },
    {
      source: {
        id: "australian-financial-review",
        name: "Australian Financial Review",
      },
      author: "Rozina Sabur, Sophia Yan, Akhtar Makoii",
      title:
        "Israel Iran attack: Three missiles at dawn: How Tel Aviv’s raid unfolded",
      description:
        "The retaliatory action appears to have been very limited in scope and calculated to avoid escalating the regional tensions into a wider war.",
      url: "http://www.afr.com/world/middle-east/three-missiles-at-dawn-how-israel-s-raid-unfolded-20240420-p5flb7",
      urlToImage:
        "https://static.ffx.io/images/$zoom_0.2587%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_227%2C$y_263/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/c848250369a4093f5f5fe2d2f0f5e958cf323843",
      publishedAt: "2024-04-19T21:51:35Z",
      content:
        "Tehran almost immediately played down the attack as reckless fireworks, claiming no damage was caused, while Israel stayed silent.\r\nThis satellite image from Planet Labs PBC shows Irans nuclear site … [+9401 chars]",
    },
  ];
  constructor() {
    super();
    console.log("News is being run.");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Donkey News</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
