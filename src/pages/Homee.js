import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

const stripePromise = loadStripe('pk_test_51N9UveSCOOyqFJgR7RagttAZlMeCk10wKTV5tNfKVTBopGA8C9YQUgKjUv0tOfHm9P4r0PzYZlRgv5r3kBFT0d3a00vC9E8msn');


const Homee = () => {
  const [loading, setLoading] = useState(false);
  
    const handleClick = async () => {
      setLoading(true);
      const stripe = await stripePromise;
      console.log('Stripe:', stripe);
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: 'price_1N9UyNSCOOyqFJgRTG9dCmUL', quantity: 1 }],
        mode: 'subscription',
        successUrl: 'http://your-website.com/success',
        cancelUrl: 'http://your-website.com/cancel',
      });
      if (error) {
        console.error(error);
        setLoading(false);
      }
    };
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Pleased Tall Seal</title>
          <meta property="og:title" content="Pleased Tall Seal" />
        </Head>
        <div className="home-home">
          <div className="home-mditick"></div>
          <div className="home-divczi8qzq"></div>
          <div className="home-divczi8qzq1"></div>
          <span className="home-text">
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </span>
          <span className="home-text002">
            <span>
              Lorem ipsum dolor sit amet consectetur. Eu ac egestas et faucibus
              massa neque. Nibh sit sit in massa velit tempor risus leo tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="home-text004">
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </span>
          <span className="home-text006">
            <span>
              Lorem ipsum dolor sit amet consectetur. Eu ac egestas et faucibus
              massa neque. Nibh sit sit in massa velit tempor risus leo tortor.
            </span>
          </span>
          <span className="home-text008">
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </span>
          <span className="home-text010">
            <span>
              Lorem ipsum dolor sit amet consectetur. Eu ac egestas et faucibus
              massa neque. Nibh sit sit in massa velit tempor risus leo tortor.
            </span>
          </span>
          <span className="home-text012">
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </span>
          <span className="home-text014">
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </span>
          <span className="home-text016">
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </span>
          <span className="home-text018">
            <span>
              Lorem ipsum dolor sit amet consectetur. Eu ac egestas et faucibus
              massa neque. Nibh sit sit in massa velit tempor risus leo tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="home-text020">
            <span>
              Lorem ipsum dolor sit amet consectetur. Eu ac egestas et faucibus
              massa neque. Nibh sit sit in massa velit tempor risus leo tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="home-text022">
            <span>
              Lorem ipsum dolor sit amet consectetur. Eu ac egestas et faucibus
              massa neque. Nibh sit sit in massa velit tempor risus leo tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="home-divczi8qzq2"></div>
          <span className="home-text024">
            <span>What people say about us</span>
          </span>
          <span className="home-text026">
            <span>
              Lorem ipsum dolor sit amet consectetur. Sem aliquam ipsum feugiat
              urna tincidunt lectus lacinia sit.
            </span>
          </span>
          <img
            src="/playground_assets/bg1523-t8sg.svg"
            alt="BG1523"
            className="home-bg"
          />
          <span className="home-text028">
            <span>
              Lorem ipsum dolor sit amet consectetur. Eu nibh massa morbi
              dignissim adipiscing. Hendrerit libero gravida sagittis nulla
              elementum.
            </span>
          </span>
          <span className="home-text030">
            <span>Lorem ipsum dolor sit amet</span>
          </span>
          <span className="home-text032">
            <span>Sabtain Haider</span>
          </span>
          <span className="home-text034">
            <span className="home-text035"></span>
          </span>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/a5e729d3-4f79-4315-bc49-258de9545231?org_if_sml=14817"
            alt="Ellipse1529"
            className="home-ellipse"
          />
          <div className="home-group1000004330">
            <div></div>
          </div>
          <img
            src="/playground_assets/bg1532-yjp.svg"
            alt="BG1532"
            className="home-bg1"
          />
          <span className="home-text036">
            <span>
              Lorem ipsum dolor sit amet consectetur. Eu nibh massa morbi
              dignissim adipiscing. Hendrerit libero gravida sagittis nulla
              elementum.
            </span>
          </span>
          <span className="home-text038">
            <span>Lorem ipsum dolor sit amet</span>
          </span>
          <span className="home-text040">
            <span>Sabtain Haider</span>
          </span>
          <span className="home-text042">
            <span className="home-text043"></span>
          </span>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/1750d654-0d3d-4801-a3c0-f382be9dc70d?org_if_sml=14599"
            alt="Ellipse1538"
            className="home-ellipse1"
          />
          <img
            src="/playground_assets/bg1539-hu24.svg"
            alt="BG1539"
            className="home-bg2"
          />
          <span className="home-text044">
            <span>
              Lorem ipsum dolor sit amet consectetur. Eu nibh massa morbi
              dignissim adipiscing. Hendrerit libero gravida sagittis nulla
              elementum.
            </span>
          </span>
          <span className="home-text046">
            <span>Lorem ipsum dolor sit amet</span>
          </span>
          <span className="home-text048">
            <span>Sabtain Haider</span>
          </span>
          <span className="home-text050">
            <span className="home-text051"></span>
          </span>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/ef12528b-6d3d-4cba-b5b9-c8000a188b41?org_if_sml=14599"
            alt="Ellipse1545"
            className="home-ellipse2"
          />
          <span className="home-text052">
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </span>
          <span className="home-text054">
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </span>
          <span className="home-text056">
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </span>
          <span className="home-text058">
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </span>
          <span className="home-text060">
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </span>
          <span className="home-text062">
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </span>
          <span className="home-text064">
            <span>
              Lorem ipsum dolor sit amet consectetur. Nulla turpis enim sagittis
              auctor pharetra viverra arcu leo faucibus. Velit risus id eu
              aenean quam. Consequat massa rhoncus parturient aliquam
            </span>
          </span>
          <span className="home-text066">
            <span>
              Lorem ipsum dolor sit amet consectetur. Nulla turpis enim sagittis
              auctor pharetra viverra arcu leo faucibus. Velit risus id eu
              aenean quam. Consequat massa rhoncus parturient aliquam
            </span>
          </span>
          <span className="home-text068">
            <span>
              Lorem ipsum dolor sit amet consectetur. Nulla turpis enim sagittis
              auctor pharetra viverra arcu leo faucibus. Velit risus id eu
              aenean quam. Consequat massa rhoncus parturient aliquam
            </span>
          </span>
          <span className="home-text070">
            <span>
              Lorem ipsum dolor sit amet consectetur. Nulla turpis enim sagittis
              auctor pharetra viverra arcu leo faucibus. Velit risus id eu
              aenean quam. Consequat massa rhoncus parturient aliquam
            </span>
          </span>
          <span className="home-text072">
            <span>
              Lorem ipsum dolor sit amet consectetur. Nulla turpis enim sagittis
              auctor pharetra viverra arcu leo faucibus. Velit risus id eu
              aenean quam. Consequat massa rhoncus parturient aliquam
            </span>
          </span>
          <span className="home-text074">
            <span>
              Lorem ipsum dolor sit amet consectetur. Nulla turpis enim sagittis
              auctor pharetra viverra arcu leo faucibus. Velit risus id eu
              aenean quam. Consequat massa rhoncus parturient aliquam
            </span>
          </span>
          <span className="home-text076">
            <span className="home-text077">
              Lorem
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text078">ipsum</span>
            <span> dolor</span>
          </span>
          <span className="home-text080">
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </span>
          <div className="home-divcard">
            <div className="home-divplan">
              <div className="home-ulfs12">
                <div className="home-li"></div>
                <div className="home-li01"></div>
                <div className="home-li02"></div>
              </div>
            </div>
          </div>
          <div className="home-divcard1">
            <div className="home-divplan1">
              <div className="home-ulfs121">
                <div className="home-li03"></div>
                <div className="home-li04"></div>
                <div className="home-li05"></div>
              </div>
            </div>
          </div>
          <div className="home-divplan2">
            <div className="home-ulfs122">
              <div className="home-li06"></div>
              <div className="home-li07"></div>
              <div className="home-li08"></div>
            </div>
          </div>
          <div className="home-divcard2">
            <div className="home-divplan3">
              <span className="home-text082">
                <span>AI - PRO</span>
              </span>
              <span className="home-text084">
                <span>$2.89</span>
              </span>
              <span className="home-text086">
                <span>USD / Month</span>
              </span>
              <div className="home-abtn">
                {/* <span className="home-text088">
                  <span>   Subscribe Now</span>
                </span> */}
                <button onClick={handleClick} disabled={loading}>
          {loading ? 'Loading...' : '   Subscribe'}
        </button>
              </div>
              <div className="home-ulfs123">
                <div className="home-li09">
                  <span className="home-text090">
                    <span>Lorem ipsum dolor sit</span>
                  </span>
                </div>
                <div className="home-li10">
                  <span className="home-text092">
                    <span>Lorem ipsum dolor sit</span>
                  </span>
                </div>
                <div className="home-li11">
                  <span className="home-text094">
                    <span>Lorem ipsum dolor sit</span>
                  </span>
                </div>
                <div className="home-li12">
                  <span className="home-text096">
                    <span>Lorem ipsum dolor sit</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span className="home-text098">
            <span>AI - PRO</span>
          </span>
          <span className="home-text100">
            <span>AI - PRO</span>
          </span>
          <span className="home-text102">
            <span>$2.89</span>
          </span>
          <span className="home-text104">
            <span>$2.89</span>
          </span>
          <span className="home-text106">
            <span>USD / Month</span>
          </span>
          <span className="home-text108">
            <span>USD / Month</span>
          </span>
          {/* <div className="home-abtn1"> */}
            {/* <span className="home-text110">
              <span>   Subscribe Now</span>
            </span> */}
            <button className="home-abtn1" onClick={handleClick} disabled={loading}>
          {loading ? 'Loading...' : '   Subscribe'}
        </button>
          {/* </div> */}
          <div className="home-abtn2">
            {/* <span className="home-text112">
              <span>   Subscribe Now</span>
            </span> */}
            <button onClick={handleClick} disabled={loading}>
          {loading ? 'Loading...' : '   Subscribe'}
        </button>
          </div>
          <div className="home-ulfs124">
            <div className="home-li13">
              <span className="home-text114">
                <span>Lorem ipsum dolor sit</span>
              </span>
            </div>
            <div className="home-li14">
              <span className="home-text116">
                <span>Lorem ipsum dolor sit</span>
              </span>
            </div>
            <div className="home-li15">
              <span className="home-text118">
                <span>Lorem ipsum dolor sit</span>
              </span>
            </div>
            <div className="home-li16">
              <span className="home-text120">
                <span>Lorem ipsum dolor sit</span>
              </span>
            </div>
          </div>
          <div className="home-ulfs125">
            <div className="home-li17">
              <span className="home-text122">
                <span>Lorem ipsum dolor sit</span>
              </span>
            </div>
            <div className="home-li18">
              <span className="home-text124">
                <span>Lorem ipsum dolor sit</span>
              </span>
            </div>
            <div className="home-li19">
              <span className="home-text126">
                <span>Lorem ipsum dolor sit</span>
              </span>
            </div>
            <div className="home-li20">
              <span className="home-text128">
                <span>Lorem ipsum dolor sit</span>
              </span>
            </div>
          </div>
          <div className="home-spanplanfeatured">
            <span className="home-text130">
              <span>Most Popular</span>
            </span>
          </div>
          <div className="home-divcn7r9wh">
            <div className="home-divcamqtoq">
              <div className="home-divfses2qr">
                <span className="home-text132">
                  <span>Is my place right for Airbnb?</span>
                </span>
                <div className="home-frame">
                  <div className="home-group">
                    <img
                      src="/playground_assets/vector1514-4424.svg"
                      alt="Vector1514"
                      className="home-vector"
                    />
                  </div>
                </div>
              </div>
              <div className="home-hrd1xtkzin"></div>
              <div className="home-divfses2qr1">
                <span className="home-text134">
                  <span>Do I have to host all the time?</span>
                </span>
                <div className="home-frame1">
                  <div className="home-group01">
                    <img
                      src="/playground_assets/vector1514-bx6g.svg"
                      alt="Vector1514"
                      className="home-vector0001"
                    />
                  </div>
                </div>
              </div>
              <div className="home-hrd1xtkzin1"></div>
              <div className="home-divfses2qr2">
                <span className="home-text136">
                  <span>How much should I interact with guests?</span>
                </span>
                <div className="home-frame2 home-frame2">
                  <div className="home-group02">
                    <img
                      src="/playground_assets/vector1515-4fed.svg"
                      alt="Vector1515"
                      className="home-vector0002"
                    />
                  </div>
                </div>
              </div>
              <div className="home-hrd1xtkzin2"></div>
              <div className="home-divfses2qr3">
                <span className="home-text138">
                  <span>Any tips on being a great Airbnb Host?</span>
                </span>
                <div className="home-frame3">
                  <div className="home-group03">
                    <img
                      src="/playground_assets/vector1516-x1wa.svg"
                      alt="Vector1516"
                      className="home-vector0003"
                    />
                  </div>
                </div>
              </div>
              <div className="home-hrd1xtkzin3"></div>
              <div className="home-divfses2qr4">
                <span className="home-text140">
                  <span>What are Airbnb’s fees?</span>
                </span>
                <div className="home-frame4">
                  <div className="home-group04">
                    <img
                      src="/playground_assets/vector1516-09na.svg"
                      alt="Vector1516"
                      className="home-vector0004"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/playground_assets/line2351516-e5df.svg"
              alt="Line2351516"
              className="home-line235"
            />
            <img
              src="/playground_assets/line2361516-4fc3.svg"
              alt="Line2361516"
              className="home-line236"
            />
          </div>
          <img
            src="/playground_assets/line2361517-vkb.svg"
            alt="Line2361517"
            className="home-line2361"
          />
          <img
            src="/playground_assets/line2371517-o0rc.svg"
            alt="Line2371517"
            className="home-line237"
          />
          <span className="home-text142">
            <span className="home-text143">
              Frequently Asked
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Questions</span>
          </span>
          <div className="home-mditick1"></div>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/4b3497cd-1c1c-4c0c-80a0-5389fb366478?org_if_sml=1361"
            alt="Ellipse61517"
            className="home-ellipse6"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/997768b5-ff46-49dd-acdc-b2bc878eb1ed?org_if_sml=1361"
            alt="Ellipse101517"
            className="home-ellipse10"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/91709b2e-d519-4e42-93a3-b911bb4e9617?org_if_sml=1361"
            alt="Ellipse141517"
            className="home-ellipse14"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/8931b27e-e507-487b-a580-1184d1dae1a6?org_if_sml=1361"
            alt="Ellipse71517"
            className="home-ellipse7"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/8702e7b4-107b-4e50-986c-23c734e84044?org_if_sml=1361"
            alt="Ellipse111517"
            className="home-ellipse11"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/a912de36-fc8f-4c80-b6a7-7019100265a9?org_if_sml=1361"
            alt="Ellipse151517"
            className="home-ellipse15"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/24cc8c09-d7a4-4d7d-97a6-7d83225310da?org_if_sml=1361"
            alt="Ellipse81518"
            className="home-ellipse8"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/23989eaf-37db-4993-8612-26fb7ebbcd30?org_if_sml=1361"
            alt="Ellipse121518"
            className="home-ellipse12"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/e9815591-037f-434e-940e-c9f057c34dcc?org_if_sml=1361"
            alt="Ellipse161518"
            className="home-ellipse16"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/da97dc4b-b813-40a6-8aa1-a4049b14809f?org_if_sml=1361"
            alt="Ellipse91518"
            className="home-ellipse9"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/5b6c6dee-a11a-4c24-a62c-e4176e44c45f?org_if_sml=1361"
            alt="Ellipse131518"
            className="home-ellipse13"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/2410d490-15ba-4f95-ae14-10e652bd7412?org_if_sml=1361"
            alt="Ellipse171518"
            className="home-ellipse17"
          />
          <div className="home-mditick2"></div>
          <img
            src="/playground_assets/vector1518-5fw.svg"
            alt="Vector1518"
            className="home-vector0005"
          />
          <img
            src="/playground_assets/vector1518-19k9.svg"
            alt="Vector1518"
            className="home-vector0006"
          />
          <img
            src="/playground_assets/vector1518-ynl.svg"
            alt="Vector1518"
            className="home-vector0007"
          />
          <img
            src="/playground_assets/vector1519-oa7e.svg"
            alt="Vector1519"
            className="home-vector0008"
          />
          <img
            src="/playground_assets/vector1519-r0p9.svg"
            alt="Vector1519"
            className="home-vector0009"
          />
          <img
            src="/playground_assets/vector1519-plmn.svg"
            alt="Vector1519"
            className="home-vector0010"
          />
          <img
            src="/playground_assets/vector1519-x1s.svg"
            alt="Vector1519"
            className="home-vector0011"
          />
          <img
            src="/playground_assets/vector1519-vt2yg.svg"
            alt="Vector1519"
            className="home-vector0012"
          />
          <img
            src="/playground_assets/vector1519-4cj.svg"
            alt="Vector1519"
            className="home-vector0013"
          />
          <img
            src="/playground_assets/vector1519-1uli.svg"
            alt="Vector1519"
            className="home-vector0014"
          />
          <img
            src="/playground_assets/vector1519-y1lu.svg"
            alt="Vector1519"
            className="home-vector0015"
          />
          <img
            src="/playground_assets/vector1519-9eh.svg"
            alt="Vector1519"
            className="home-vector0016"
          />
          <img
            src="/playground_assets/vector1519-566.svg"
            alt="Vector1519"
            className="home-vector0017"
          />
          <img
            src="/playground_assets/vector1520-d3ct.svg"
            alt="Vector1520"
            className="home-vector0018"
          />
          <img
            src="/playground_assets/vector1520-rh5k.svg"
            alt="Vector1520"
            className="home-vector0019"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/05f4e02f-719f-407b-a802-791160870295?org_if_sml=1701856"
            alt="Rectangle100521520"
            className="home-rectangle10052"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/4e08b123-83a0-4bba-ba47-26e08d83c691?org_if_sml=11809205"
            alt="Rectangle100531520"
            className="home-rectangle10053"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/a54defc4-31d7-4e9e-8325-03abbee52b86?org_if_sml=15849"
            alt="Rectangle101451520"
            className="home-rectangle10145"
          />
          <img
            src="/playground_assets/vector1520-0ekc.svg"
            alt="Vector1520"
            className="home-vector0020"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/13dac31e-d0cd-4b59-928e-46d8601aa250?org_if_sml=12079"
            alt="Rectangle41521"
            className="home-rectangle4"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/3ea457fe-f24b-46c2-9315-8311862ff750?org_if_sml=12079"
            alt="Rectangle100541521"
            className="home-rectangle10054"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/20d62dee-51f6-4c50-bf94-632cb0d045cd?org_if_sml=1315"
            alt="Rectangle100551521"
            className="home-rectangle10055"
          />
          <span className="home-text145">
            <Link href="/Signup">Get Started</Link>
          </span>
          <span className="home-text147">
            <Link href="/Signup">Get Started</Link>
          </span>
          <span className="home-text149">
            <Link href="/Signup">Get Started</Link>
          </span>
          <span className="home-text151">
            <Link href="/Homee">Home</Link>
          </span>
          <span className="home-text153">
            <Link href="/Content">Generate</Link>
            </span>
          
          <span className="home-text155">
            <span>Blogs</span>
          </span>
          <span className="home-text157">
            <Link href="/Terms">Terms &amp; Conditions</Link>
          </span>
          <span className="home-text159">
            <Link href="/Dashboard">Dashboard</Link>
          </span>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/cdd96896-a2db-4bfd-9f1f-f5355793ae16?org_if_sml=1124"
            alt="Rectangle63631522"
            className="home-rectangle6363"
          />
          <span className="home-text161">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text162">
            <span className="home-text163">
              Lorem ipsum dolor sit
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>amet consectetur.</span>
          </span>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/52b61cc1-a00d-4033-abe9-26810ed12b73?org_if_sml=1180"
            alt="Rectangle100561522"
            className="home-rectangle10056"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/c468d30e-1c2f-468e-b0db-c6f86c32c199?org_if_sml=1180"
            alt="Rectangle100581522"
            className="home-rectangle10058"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/e4866184-f177-421c-8498-9325b7fe29d7?org_if_sml=1180"
            alt="Rectangle100571522"
            className="home-rectangle10057"
          />
          <div className="home-seminarpana1">
            <div className="home-freepikbackgroundcompleteinject2">
              <img
                src="/playground_assets/vector1523-w8s.svg"
                alt="Vector1523"
                className="home-vector0021"
              />
              <img
                src="/playground_assets/vector1523-yhs4.svg"
                alt="Vector1523"
                className="home-vector0022"
              />
              <img
                src="/playground_assets/vector1524-4lx5.svg"
                alt="Vector1524"
                className="home-vector0023"
              />
              <img
                src="/playground_assets/vector1524-hka8.svg"
                alt="Vector1524"
                className="home-vector0024"
              />
              <img
                src="/playground_assets/vector1524-5jlb.svg"
                alt="Vector1524"
                className="home-vector0025"
              />
              <img
                src="/playground_assets/vector1525-crw.svg"
                alt="Vector1525"
                className="home-vector0026"
              />
              <img
                src="/playground_assets/vector1525-zln.svg"
                alt="Vector1525"
                className="home-vector0027"
              />
            </div>
            <div className="home-freepik-floorinject2"></div>
            <div className="home-freepik-stageinject2"></div>
            <div className="home-freepik-plantinject2">
              <div className="home-group05"></div>
              <div className="home-group06"></div>
            </div>
            <div className="home-freepik-boardinject2"></div>
            <div className="home-freepikspeechbubble2inject2"></div>
            <div className="home-freepikspeechbubble1inject2"></div>
            <div className="home-freepikcharacter5inject2"></div>
            <div className="home-freepikcharacter4inject2"></div>
            <div className="home-freepikcharacter3inject2">
              <div className="home-group07"></div>
            </div>
            <div className="home-freepikcharacter2inject2">
              <div className="home-group08"></div>
            </div>
            <div className="home-freepikcharacter1inject2"></div>
          </div>
          <div className="home-productqualitypana1">
            <div className="home-freepikbackgroundcompleteinject21">
              <img
                src="/playground_assets/vector1555-6xqq.svg"
                alt="Vector1555"
                className="home-vector0028"
              />
              <img
                src="/playground_assets/vector1555-quwg.svg"
                alt="Vector1555"
                className="home-vector0029"
              />
              <img
                src="/playground_assets/vector1555-bfhf.svg"
                alt="Vector1555"
                className="home-vector0030"
              />
              <img
                src="/playground_assets/vector1555-j6oo.svg"
                alt="Vector1555"
                className="home-vector0031"
              />
              <img
                src="/playground_assets/vector1555-uza6.svg"
                alt="Vector1555"
                className="home-vector0032"
              />
              <img
                src="/playground_assets/vector1555-glfb.svg"
                alt="Vector1555"
                className="home-vector0033"
              />
              <img
                src="/playground_assets/vector1556-xmnz.svg"
                alt="Vector1556"
                className="home-vector0034"
              />
              <img
                src="/playground_assets/vector1556-6eth.svg"
                alt="Vector1556"
                className="home-vector0035"
              />
              <img
                src="/playground_assets/vector1556-vyws.svg"
                alt="Vector1556"
                className="home-vector0036"
              />
              <img
                src="/playground_assets/vector1556-e9h.svg"
                alt="Vector1556"
                className="home-vector0037"
              />
              <img
                src="/playground_assets/vector1556-q3l9.svg"
                alt="Vector1556"
                className="home-vector0038"
              />
              <img
                src="/playground_assets/vector1556-az0h.svg"
                alt="Vector1556"
                className="home-vector0039"
              />
              <img
                src="/playground_assets/vector1556-7rv6.svg"
                alt="Vector1556"
                className="home-vector0040"
              />
              <img
                src="/playground_assets/vector1556-zsqq.svg"
                alt="Vector1556"
                className="home-vector0041"
              />
              <img
                src="/playground_assets/vector1556-qhb.svg"
                alt="Vector1556"
                className="home-vector0042"
              />
              <img
                src="/playground_assets/vector1556-lqc.svg"
                alt="Vector1556"
                className="home-vector0043"
              />
              <img
                src="/playground_assets/vector1557-ohty.svg"
                alt="Vector1557"
                className="home-vector0044"
              />
              <img
                src="/playground_assets/vector1557-n5h.svg"
                alt="Vector1557"
                className="home-vector0045"
              />
            </div>
            <div className="home-freepik-starsinject2">
              <img
                src="/playground_assets/vector1557-vwe.svg"
                alt="Vector1557"
                className="home-vector0046"
              />
              <img
                src="/playground_assets/vector1557-kynd.svg"
                alt="Vector1557"
                className="home-vector0047"
              />
            </div>
            <div className="home-freepikspeechbubbleinject2">
              <img
                src="/playground_assets/vector1557-6qo.svg"
                alt="Vector1557"
                className="home-vector0048"
              />
              <img
                src="/playground_assets/vector1557-2nkg.svg"
                alt="Vector1557"
                className="home-vector0049"
              />
              <img
                src="/playground_assets/vector1557-hgr.svg"
                alt="Vector1557"
                className="home-vector0050"
              />
            </div>
            <div className="home-freepik-clipboardinject2">
              <img
                src="/playground_assets/vector1558-61hb.svg"
                alt="Vector1558"
                className="home-vector0051"
              />
              <img
                src="/playground_assets/vector1558-unwm.svg"
                alt="Vector1558"
                className="home-vector0052"
              />
              <div className="home-group09">
                <img
                  src="/playground_assets/vector1558-f4y2.svg"
                  alt="Vector1558"
                  className="home-vector0053"
                />
              </div>
              <div className="home-group10">
                <img
                  src="/playground_assets/vector1558-jvzh.svg"
                  alt="Vector1558"
                  className="home-vector0054"
                />
              </div>
              <img
                src="/playground_assets/vector1558-cbyd.svg"
                alt="Vector1558"
                className="home-vector0055"
              />
              <img
                src="/playground_assets/vector1558-6esq.svg"
                alt="Vector1558"
                className="home-vector0056"
              />
              <img
                src="/playground_assets/vector1558-9lpo.svg"
                alt="Vector1558"
                className="home-vector0057"
              />
              <img
                src="/playground_assets/vector1558-rmrk.svg"
                alt="Vector1558"
                className="home-vector0058"
              />
              <img
                src="/playground_assets/vector1559-d0l.svg"
                alt="Vector1559"
                className="home-vector0059"
              />
              <img
                src="/playground_assets/vector1559-lc9.svg"
                alt="Vector1559"
                className="home-vector0060"
              />
              <img
                src="/playground_assets/vector1559-xwtt.svg"
                alt="Vector1559"
                className="home-vector0061"
              />
              <img
                src="/playground_assets/vector1559-66t.svg"
                alt="Vector1559"
                className="home-vector0062"
              />
              <img
                src="/playground_assets/vector1559-twu.svg"
                alt="Vector1559"
                className="home-vector0063"
              />
              <img
                src="/playground_assets/vector1559-ur1o.svg"
                alt="Vector1559"
                className="home-vector0064"
              />
              <img
                src="/playground_assets/vector1559-zfa.svg"
                alt="Vector1559"
                className="home-vector0065"
              />
              <img
                src="/playground_assets/vector1559-4dn9.svg"
                alt="Vector1559"
                className="home-vector0066"
              />
              <img
                src="/playground_assets/vector1559-yndt.svg"
                alt="Vector1559"
                className="home-vector0067"
              />
              <img
                src="/playground_assets/vector1559-sc6i.svg"
                alt="Vector1559"
                className="home-vector0068"
              />
              <img
                src="/playground_assets/vector1560-xxvu.svg"
                alt="Vector1560"
                className="home-vector0069"
              />
              <img
                src="/playground_assets/vector1560-tv2e.svg"
                alt="Vector1560"
                className="home-vector0070"
              />
              <img
                src="/playground_assets/vector1560-0tzm.svg"
                alt="Vector1560"
                className="home-vector0071"
              />
              <img
                src="/playground_assets/vector1560-fo2s.svg"
                alt="Vector1560"
                className="home-vector0072"
              />
              <img
                src="/playground_assets/vector1560-ai0h.svg"
                alt="Vector1560"
                className="home-vector0073"
              />
              <img
                src="/playground_assets/vector1560-db8e.svg"
                alt="Vector1560"
                className="home-vector0074"
              />
              <img
                src="/playground_assets/vector1560-gfs9.svg"
                alt="Vector1560"
                className="home-vector0075"
              />
              <img
                src="/playground_assets/vector1560-kk78.svg"
                alt="Vector1560"
                className="home-vector0076"
              />
              <img
                src="/playground_assets/vector1560-mxtd.svg"
                alt="Vector1560"
                className="home-vector0077"
              />
              <img
                src="/playground_assets/vector1560-yotn.svg"
                alt="Vector1560"
                className="home-vector0078"
              />
              <img
                src="/playground_assets/vector1561-bf3q.svg"
                alt="Vector1561"
                className="home-vector0079"
              />
              <img
                src="/playground_assets/vector1561-osih.svg"
                alt="Vector1561"
                className="home-vector0080"
              />
              <img
                src="/playground_assets/vector1561-5foi.svg"
                alt="Vector1561"
                className="home-vector0081"
              />
              <img
                src="/playground_assets/vector1561-kmge.svg"
                alt="Vector1561"
                className="home-vector0082"
              />
              <img
                src="/playground_assets/vector1561-z909.svg"
                alt="Vector1561"
                className="home-vector0083"
              />
            </div>
            <div className="home-freepik-characterinject2">
              <img
                src="/playground_assets/vector1561-1rl.svg"
                alt="Vector1561"
                className="home-vector0084"
              />
              <div className="home-group11">
                <img
                  src="/playground_assets/vector1561-bsp.svg"
                  alt="Vector1561"
                  className="home-vector0085"
                />
              </div>
              <img
                src="/playground_assets/vector1561-nwlj.svg"
                alt="Vector1561"
                className="home-vector0086"
              />
              <img
                src="/playground_assets/vector1562-xx4.svg"
                alt="Vector1562"
                className="home-vector0087"
              />
              <div className="home-group12">
                <img
                  src="/playground_assets/vector1562-nwfv.svg"
                  alt="Vector1562"
                  className="home-vector0088"
                />
              </div>
              <img
                src="/playground_assets/vector1562-8nzw.svg"
                alt="Vector1562"
                className="home-vector0089"
              />
              <img
                src="/playground_assets/vector1562-ejq9.svg"
                alt="Vector1562"
                className="home-vector0090"
              />
              <img
                src="/playground_assets/vector1562-twc.svg"
                alt="Vector1562"
                className="home-vector0091"
              />
              <img
                src="/playground_assets/vector1562-fdzk.svg"
                alt="Vector1562"
                className="home-vector0092"
              />
              <img
                src="/playground_assets/vector1562-zv88.svg"
                alt="Vector1562"
                className="home-vector0093"
              />
              <img
                src="/playground_assets/vector1562-l6re.svg"
                alt="Vector1562"
                className="home-vector0094"
              />
              <img
                src="/playground_assets/vector1562-gkvq.svg"
                alt="Vector1562"
                className="home-vector0095"
              />
              <img
                src="/playground_assets/vector1563-vc3.svg"
                alt="Vector1563"
                className="home-vector0096"
              />
              <img
                src="/playground_assets/vector1563-n8m.svg"
                alt="Vector1563"
                className="home-vector0097"
              />
              <img
                src="/playground_assets/vector1563-xqzq.svg"
                alt="Vector1563"
                className="home-vector0098"
              />
              <img
                src="/playground_assets/vector1563-xoh.svg"
                alt="Vector1563"
                className="home-vector0099"
              />
              <img
                src="/playground_assets/vector1563-vqj3h.svg"
                alt="Vector1563"
                className="home-vector0100"
              />
              <img
                src="/playground_assets/vector1563-jxh.svg"
                alt="Vector1563"
                className="home-vector0101"
              />
              <img
                src="/playground_assets/vector1563-4g.svg"
                alt="Vector1563"
                className="home-vector0102"
              />
              <img
                src="/playground_assets/vector1563-kiyq.svg"
                alt="Vector1563"
                className="home-vector0103"
              />
              <img
                src="/playground_assets/vector1563-ojwv.svg"
                alt="Vector1563"
                className="home-vector0104"
              />
              <img
                src="/playground_assets/vector1563-7p1t.svg"
                alt="Vector1563"
                className="home-vector0105"
              />
              <img
                src="/playground_assets/vector1564-m99.svg"
                alt="Vector1564"
                className="home-vector0106"
              />
              <img
                src="/playground_assets/vector1564-3vef.svg"
                alt="Vector1564"
                className="home-vector0107"
              />
              <img
                src="/playground_assets/vector1564-gp8e.svg"
                alt="Vector1564"
                className="home-vector0108"
              />
              <img
                src="/playground_assets/vector1564-nsfq.svg"
                alt="Vector1564"
                className="home-vector0109"
              />
              <img
                src="/playground_assets/vector1564-ly3.svg"
                alt="Vector1564"
                className="home-vector0110"
              />
              <img
                src="/playground_assets/vector1564-stp.svg"
                alt="Vector1564"
                className="home-vector0111"
              />
              <img
                src="/playground_assets/vector1564-i3p.svg"
                alt="Vector1564"
                className="home-vector0112"
              />
              <img
                src="/playground_assets/vector1564-lftk.svg"
                alt="Vector1564"
                className="home-vector0113"
              />
              <img
                src="/playground_assets/vector1564-57x.svg"
                alt="Vector1564"
                className="home-vector0114"
              />
              <img
                src="/playground_assets/vector1564-ifnh.svg"
                alt="Vector1564"
                className="home-vector0115"
              />
              <img
                src="/playground_assets/vector1565-hxie.svg"
                alt="Vector1565"
                className="home-vector0116"
              />
              <img
                src="/playground_assets/vector1565-0qn7.svg"
                alt="Vector1565"
                className="home-vector0117"
              />
              <div className="home-group13">
                <img
                  src="/playground_assets/vector1565-neis.svg"
                  alt="Vector1565"
                  className="home-vector0118"
                />
              </div>
              <div className="home-group14">
                <img
                  src="/playground_assets/vector1565-vbza.svg"
                  alt="Vector1565"
                  className="home-vector0119"
                />
              </div>
              <div className="home-group15">
                <img
                  src="/playground_assets/vector1565-6q9c.svg"
                  alt="Vector1565"
                  className="home-vector0120"
                />
              </div>
              <div className="home-group16">
                <img
                  src="/playground_assets/vector1565-1vl2.svg"
                  alt="Vector1565"
                  className="home-vector0121"
                />
              </div>
              <div className="home-group17">
                <img
                  src="/playground_assets/vector1566-0z6o.svg"
                  alt="Vector1566"
                  className="home-vector0122"
                />
              </div>
              <div className="home-group18">
                <img
                  src="/playground_assets/vector1566-go9m.svg"
                  alt="Vector1566"
                  className="home-vector0123"
                />
              </div>
              <div className="home-group19">
                <img
                  src="/playground_assets/vector1566-5kya.svg"
                  alt="Vector1566"
                  className="home-vector0124"
                />
              </div>
              <div className="home-group20">
                <img
                  src="/playground_assets/vector1566-9mpw.svg"
                  alt="Vector1566"
                  className="home-vector0125"
                />
              </div>
              <div className="home-group21">
                <img
                  src="/playground_assets/vector1566-p4wj.svg"
                  alt="Vector1566"
                  className="home-vector0126"
                />
                <img
                  src="/playground_assets/vector1567-jzue.svg"
                  alt="Vector1567"
                  className="home-vector0127"
                />
                <img
                  src="/playground_assets/vector1567-3e4i.svg"
                  alt="Vector1567"
                  className="home-vector0128"
                />
                <img
                  src="/playground_assets/vector1567-p86.svg"
                  alt="Vector1567"
                  className="home-vector0129"
                />
                <img
                  src="/playground_assets/vector1567-yc7d.svg"
                  alt="Vector1567"
                  className="home-vector0130"
                />
                <img
                  src="/playground_assets/vector1567-kll4.svg"
                  alt="Vector1567"
                  className="home-vector0131"
                />
                <img
                  src="/playground_assets/vector1567-2wsb.svg"
                  alt="Vector1567"
                  className="home-vector0132"
                />
                <img
                  src="/playground_assets/vector1567-vr08.svg"
                  alt="Vector1567"
                  className="home-vector0133"
                />
              </div>
              <img
                src="/playground_assets/vector1567-3wi.svg"
                alt="Vector1567"
                className="home-vector0134"
              />
              <img
                src="/playground_assets/vector1567-4n7.svg"
                alt="Vector1567"
                className="home-vector0135"
              />
              <img
                src="/playground_assets/vector1567-xbje.svg"
                alt="Vector1567"
                className="home-vector0136"
              />
              <img
                src="/playground_assets/vector1568-3as.svg"
                alt="Vector1568"
                className="home-vector0137"
              />
              <img
                src="/playground_assets/vector1568-rmgp.svg"
                alt="Vector1568"
                className="home-vector0138"
              />
              <img
                src="/playground_assets/vector1568-nsph.svg"
                alt="Vector1568"
                className="home-vector0139"
              />
              <img
                src="/playground_assets/vector1568-pt1d.svg"
                alt="Vector1568"
                className="home-vector0140"
              />
              <img
                src="/playground_assets/vector1568-pqx7e.svg"
                alt="Vector1568"
                className="home-vector0141"
              />
              <img
                src="/playground_assets/vector1568-zqr.svg"
                alt="Vector1568"
                className="home-vector0142"
              />
              <img
                src="/playground_assets/vector1568-m7vh.svg"
                alt="Vector1568"
                className="home-vector0143"
              />
              <img
                src="/playground_assets/vector1568-viqf.svg"
                alt="Vector1568"
                className="home-vector0144"
              />
              <img
                src="/playground_assets/vector1568-1wll.svg"
                alt="Vector1568"
                className="home-vector0145"
              />
              <img
                src="/playground_assets/vector1568-if8o.svg"
                alt="Vector1568"
                className="home-vector0146"
              />
              <img
                src="/playground_assets/vector1569-h73j.svg"
                alt="Vector1569"
                className="home-vector0147"
              />
              <img
                src="/playground_assets/vector1569-wt9o.svg"
                alt="Vector1569"
                className="home-vector0148"
              />
              <img
                src="/playground_assets/vector1569-1b91.svg"
                alt="Vector1569"
                className="home-vector0149"
              />
              <img
                src="/playground_assets/vector1569-ce1p.svg"
                alt="Vector1569"
                className="home-vector0150"
              />
              <img
                src="/playground_assets/vector1569-f59a.svg"
                alt="Vector1569"
                className="home-vector0151"
              />
              <img
                src="/playground_assets/vector1569-xs8.svg"
                alt="Vector1569"
                className="home-vector0152"
              />
              <div className="home-group22">
                <img
                  src="/playground_assets/vector1569-eupt.svg"
                  alt="Vector1569"
                  className="home-vector0153"
                />
              </div>
              <img
                src="/playground_assets/vector1569-r9sg.svg"
                alt="Vector1569"
                className="home-vector0154"
              />
              <img
                src="/playground_assets/vector1569-1pgn.svg"
                alt="Vector1569"
                className="home-vector0155"
              />
              <img
                src="/playground_assets/vector1570-d2jd.svg"
                alt="Vector1570"
                className="home-vector0156"
              />
              <img
                src="/playground_assets/vector1570-us64.svg"
                alt="Vector1570"
                className="home-vector0157"
              />
              <img
                src="/playground_assets/vector1570-qok4.svg"
                alt="Vector1570"
                className="home-vector0158"
              />
              <img
                src="/playground_assets/vector1570-n3vu.svg"
                alt="Vector1570"
                className="home-vector0159"
              />
              <img
                src="/playground_assets/vector1570-yljg.svg"
                alt="Vector1570"
                className="home-vector0160"
              />
              <img
                src="/playground_assets/vector1570-ph8.svg"
                alt="Vector1570"
                className="home-vector0161"
              />
              <img
                src="/playground_assets/vector1570-6o7.svg"
                alt="Vector1570"
                className="home-vector0162"
              />
              <img
                src="/playground_assets/vector1570-j7hc.svg"
                alt="Vector1570"
                className="home-vector0163"
              />
              <img
                src="/playground_assets/vector1570-3u7.svg"
                alt="Vector1570"
                className="home-vector0164"
              />
              <img
                src="/playground_assets/vector1570-s83p.svg"
                alt="Vector1570"
                className="home-vector0165"
              />
              <img
                src="/playground_assets/vector1571-o5no.svg"
                alt="Vector1571"
                className="home-vector0166"
              />
              <img
                src="/playground_assets/vector1571-88ak.svg"
                alt="Vector1571"
                className="home-vector0167"
              />
              <img
                src="/playground_assets/vector1571-64yj.svg"
                alt="Vector1571"
                className="home-vector0168"
              />
              <img
                src="/playground_assets/vector1571-69vp.svg"
                alt="Vector1571"
                className="home-vector0169"
              />
              <img
                src="/playground_assets/vector1571-r6v.svg"
                alt="Vector1571"
                className="home-vector0170"
              />
              <img
                src="/playground_assets/vector1571-ghpr.svg"
                alt="Vector1571"
                className="home-vector0171"
              />
              <img
                src="/playground_assets/vector1571-2p9p.svg"
                alt="Vector1571"
                className="home-vector0172"
              />
              <img
                src="/playground_assets/vector1571-otqq.svg"
                alt="Vector1571"
                className="home-vector0173"
              />
              <img
                src="/playground_assets/vector1571-9nz.svg"
                alt="Vector1571"
                className="home-vector0174"
              />
            </div>
          </div>
          <div className="home-questionspana1">
            <div className="home-freepikbackgroundcompleteinject11">
              <img
                src="/playground_assets/vector1572-hgjm.svg"
                alt="Vector1572"
                className="home-vector0175"
              />
              <img
                src="/playground_assets/vector1572-wsp.svg"
                alt="Vector1572"
                className="home-vector0176"
              />
              <img
                src="/playground_assets/vector1572-d8zs.svg"
                alt="Vector1572"
                className="home-vector0177"
              />
              <img
                src="/playground_assets/vector1572-2val.svg"
                alt="Vector1572"
                className="home-vector0178"
              />
              <img
                src="/playground_assets/vector1572-3pe.svg"
                alt="Vector1572"
                className="home-vector0179"
              />
              <img
                src="/playground_assets/vector1572-z6es.svg"
                alt="Vector1572"
                className="home-vector0180"
              />
              <img
                src="/playground_assets/vector1572-uym.svg"
                alt="Vector1572"
                className="home-vector0181"
              />
              <img
                src="/playground_assets/vector1572-qf74g.svg"
                alt="Vector1572"
                className="home-vector0182"
              />
              <img
                src="/playground_assets/vector1572-chno.svg"
                alt="Vector1572"
                className="home-vector0183"
              />
              <img
                src="/playground_assets/vector1573-8jc.svg"
                alt="Vector1573"
                className="home-vector0184"
              />
              <img
                src="/playground_assets/vector1573-3oon.svg"
                alt="Vector1573"
                className="home-vector0185"
              />
              <img
                src="/playground_assets/vector1573-xqtr.svg"
                alt="Vector1573"
                className="home-vector0186"
              />
              <img
                src="/playground_assets/vector1573-pqef.svg"
                alt="Vector1573"
                className="home-vector0187"
              />
              <img
                src="/playground_assets/vector1573-4577.svg"
                alt="Vector1573"
                className="home-vector0188"
              />
              <img
                src="/playground_assets/vector1573-btvd.svg"
                alt="Vector1573"
                className="home-vector0189"
              />
              <img
                src="/playground_assets/vector1573-hl8a.svg"
                alt="Vector1573"
                className="home-vector0190"
              />
              <img
                src="/playground_assets/vector1573-m6bf.svg"
                alt="Vector1573"
                className="home-vector0191"
              />
              <img
                src="/playground_assets/vector1573-btb8.svg"
                alt="Vector1573"
                className="home-vector0192"
              />
              <img
                src="/playground_assets/vector1573-8nb9q.svg"
                alt="Vector1573"
                className="home-vector0193"
              />
              <img
                src="/playground_assets/vector1574-avym.svg"
                alt="Vector1574"
                className="home-vector0194"
              />
              <img
                src="/playground_assets/vector1574-75in.svg"
                alt="Vector1574"
                className="home-vector0195"
              />
              <img
                src="/playground_assets/vector1574-qsg.svg"
                alt="Vector1574"
                className="home-vector0196"
              />
              <img
                src="/playground_assets/vector1574-fb9m.svg"
                alt="Vector1574"
                className="home-vector0197"
              />
              <img
                src="/playground_assets/vector1574-4j07.svg"
                alt="Vector1574"
                className="home-vector0198"
              />
            </div>
            <div className="home-freepik-floorinject11">
              <img
                src="/playground_assets/vector1574-3fbs.svg"
                alt="Vector1574"
                className="home-vector0199"
              />
            </div>
            <div className="home-freepik-plantinject11">
              <img
                src="/playground_assets/vector1574-rix2.svg"
                alt="Vector1574"
                className="home-vector0200"
              />
              <div className="home-group23">
                <img
                  src="/playground_assets/vector1575-a87e.svg"
                  alt="Vector1575"
                  className="home-vector0201"
                />
              </div>
              <img
                src="/playground_assets/vector1575-niyg.svg"
                alt="Vector1575"
                className="home-vector0202"
              />
              <img
                src="/playground_assets/vector1575-hzon.svg"
                alt="Vector1575"
                className="home-vector0203"
              />
              <img
                src="/playground_assets/vector1575-ei8.svg"
                alt="Vector1575"
                className="home-vector0204"
              />
              <img
                src="/playground_assets/vector1575-bpjt.svg"
                alt="Vector1575"
                className="home-vector0205"
              />
            </div>
            <div className="home-freepikspeechbubbleinject11">
              <img
                src="/playground_assets/vector1575-f2xl.svg"
                alt="Vector1575"
                className="home-vector0206"
              />
              <img
                src="/playground_assets/vector1575-dov.svg"
                alt="Vector1575"
                className="home-vector0207"
              />
              <img
                src="/playground_assets/vector1575-3zd.svg"
                alt="Vector1575"
                className="home-vector0208"
              />
            </div>
            <div className="home-freepikquestionmarkinject11">
              <img
                src="/playground_assets/vector1576-jc6s.svg"
                alt="Vector1576"
                className="home-vector0209"
              />
              <img
                src="/playground_assets/vector1576-0ax5.svg"
                alt="Vector1576"
                className="home-vector0210"
              />
              <img
                src="/playground_assets/vector1576-7xgt.svg"
                alt="Vector1576"
                className="home-vector0211"
              />
              <img
                src="/playground_assets/vector1576-7b8i.svg"
                alt="Vector1576"
                className="home-vector0212"
              />
              <img
                src="/playground_assets/vector1576-k74d.svg"
                alt="Vector1576"
                className="home-vector0213"
              />
              <img
                src="/playground_assets/vector1576-fcz.svg"
                alt="Vector1576"
                className="home-vector0214"
              />
              <img
                src="/playground_assets/vector1576-h07.svg"
                alt="Vector1576"
                className="home-vector0215"
              />
              <img
                src="/playground_assets/vector1576-5obg.svg"
                alt="Vector1576"
                className="home-vector0216"
              />
              <img
                src="/playground_assets/vector1576-81yo.svg"
                alt="Vector1576"
                className="home-vector0217"
              />
              <img
                src="/playground_assets/vector1576-mbrr.svg"
                alt="Vector1576"
                className="home-vector0218"
              />
              <img
                src="/playground_assets/vector1577-58s.svg"
                alt="Vector1577"
                className="home-vector0219"
              />
              <img
                src="/playground_assets/vector1577-wxa.svg"
                alt="Vector1577"
                className="home-vector0220"
              />
              <img
                src="/playground_assets/vector1577-dg7n.svg"
                alt="Vector1577"
                className="home-vector0221"
              />
            </div>
            <div className="home-freepik-characterinject11">
              <img
                src="/playground_assets/vector1577-uvta.svg"
                alt="Vector1577"
                className="home-vector0222"
              />
              <div className="home-group24">
                <img
                  src="/playground_assets/vector1577-bt1r.svg"
                  alt="Vector1577"
                  className="home-vector0223"
                />
              </div>
              <img
                src="/playground_assets/vector1577-e8pr.svg"
                alt="Vector1577"
                className="home-vector0224"
              />
              <div className="home-group25">
                <img
                  src="/playground_assets/vector1577-5gsk.svg"
                  alt="Vector1577"
                  className="home-vector0225"
                />
              </div>
              <img
                src="/playground_assets/vector1578-xtq.svg"
                alt="Vector1578"
                className="home-vector0226"
              />
              <div className="home-group26">
                <img
                  src="/playground_assets/vector1578-ulz.svg"
                  alt="Vector1578"
                  className="home-vector0227"
                />
              </div>
              <div className="home-group27">
                <img
                  src="/playground_assets/vector1578-v97.svg"
                  alt="Vector1578"
                  className="home-vector0228"
                />
              </div>
              <img
                src="/playground_assets/vector1578-e5qo.svg"
                alt="Vector1578"
                className="home-vector0229"
              />
              <img
                src="/playground_assets/vector1578-deoe.svg"
                alt="Vector1578"
                className="home-vector0230"
              />
              <img
                src="/playground_assets/vector1578-7vq3.svg"
                alt="Vector1578"
                className="home-vector0231"
              />
              <img
                src="/playground_assets/vector1578-d7ya.svg"
                alt="Vector1578"
                className="home-vector0232"
              />
              <img
                src="/playground_assets/vector1578-ws1t.svg"
                alt="Vector1578"
                className="home-vector0233"
              />
              <img
                src="/playground_assets/vector1579-snu.svg"
                alt="Vector1579"
                className="home-vector0234"
              />
              <img
                src="/playground_assets/vector1579-ry3y.svg"
                alt="Vector1579"
                className="home-vector0235"
              />
              <img
                src="/playground_assets/vector1579-qhch.svg"
                alt="Vector1579"
                className="home-vector0236"
              />
              <img
                src="/playground_assets/vector1579-9kyd.svg"
                alt="Vector1579"
                className="home-vector0237"
              />
              <img
                src="/playground_assets/vector1579-l0fm.svg"
                alt="Vector1579"
                className="home-vector0238"
              />
              <div className="home-group28">
                <img
                  src="/playground_assets/vector1579-4dr.svg"
                  alt="Vector1579"
                  className="home-vector0239"
                />
              </div>
              <div className="home-group29">
                <img
                  src="/playground_assets/vector1579-d375.svg"
                  alt="Vector1579"
                  className="home-vector0240"
                />
              </div>
              <img
                src="/playground_assets/vector1579-ds8d.svg"
                alt="Vector1579"
                className="home-vector0241"
              />
              <img
                src="/playground_assets/vector1580-x9pm.svg"
                alt="Vector1580"
                className="home-vector0242"
              />
              <img
                src="/playground_assets/vector1580-vg2j.svg"
                alt="Vector1580"
                className="home-vector0243"
              />
              <img
                src="/playground_assets/vector1580-pydjs.svg"
                alt="Vector1580"
                className="home-vector0244"
              />
              <img
                src="/playground_assets/vector1580-i3mh.svg"
                alt="Vector1580"
                className="home-vector0245"
              />
              <img
                src="/playground_assets/vector1580-t9r.svg"
                alt="Vector1580"
                className="home-vector0246"
              />
              <img
                src="/playground_assets/vector1580-wv9k.svg"
                alt="Vector1580"
                className="home-vector0247"
              />
              <img
                src="/playground_assets/vector1580-2jx4.svg"
                alt="Vector1580"
                className="home-vector0248"
              />
              <img
                src="/playground_assets/vector1580-ktz.svg"
                alt="Vector1580"
                className="home-vector0249"
              />
              <img
                src="/playground_assets/vector1580-4057.svg"
                alt="Vector1580"
                className="home-vector0250"
              />
              <img
                src="/playground_assets/vector1580-itmi.svg"
                alt="Vector1580"
                className="home-vector0251"
              />
              <img
                src="/playground_assets/vector1581-kzwf.svg"
                alt="Vector1581"
                className="home-vector0252"
              />
              <img
                src="/playground_assets/vector1581-16m.svg"
                alt="Vector1581"
                className="home-vector0253"
              />
              <img
                src="/playground_assets/vector1581-lpq6.svg"
                alt="Vector1581"
                className="home-vector0254"
              />
              <img
                src="/playground_assets/vector1581-gj1c.svg"
                alt="Vector1581"
                className="home-vector0255"
              />
              <img
                src="/playground_assets/vector1581-ck3a.svg"
                alt="Vector1581"
                className="home-vector0256"
              />
              <img
                src="/playground_assets/vector1581-zizn.svg"
                alt="Vector1581"
                className="home-vector0257"
              />
              <img
                src="/playground_assets/vector1581-lbac.svg"
                alt="Vector1581"
                className="home-vector0258"
              />
              <img
                src="/playground_assets/vector1581-p4j8.svg"
                alt="Vector1581"
                className="home-vector0259"
              />
              <img
                src="/playground_assets/vector1581-w2xj.svg"
                alt="Vector1581"
                className="home-vector0260"
              />
              <img
                src="/playground_assets/vector1581-vgud.svg"
                alt="Vector1581"
                className="home-vector0261"
              />
              <img
                src="/playground_assets/vector1582-c6v.svg"
                alt="Vector1582"
                className="home-vector0262"
              />
              <img
                src="/playground_assets/vector1582-86r.svg"
                alt="Vector1582"
                className="home-vector0263"
              />
              <img
                src="/playground_assets/vector1582-q8ia.svg"
                alt="Vector1582"
                className="home-vector0264"
              />
              <img
                src="/playground_assets/vector1582-s9d.svg"
                alt="Vector1582"
                className="home-vector0265"
              />
              <img
                src="/playground_assets/vector1582-b596.svg"
                alt="Vector1582"
                className="home-vector0266"
              />
              <img
                src="/playground_assets/vector1582-lae7.svg"
                alt="Vector1582"
                className="home-vector0267"
              />
              <img
                src="/playground_assets/vector1582-qp8v.svg"
                alt="Vector1582"
                className="home-vector0268"
              />
              <img
                src="/playground_assets/vector1582-laq.svg"
                alt="Vector1582"
                className="home-vector0269"
              />
              <img
                src="/playground_assets/vector1582-n238.svg"
                alt="Vector1582"
                className="home-vector0270"
              />
              <img
                src="/playground_assets/vector1582-amwm.svg"
                alt="Vector1582"
                className="home-vector0271"
              />
              <img
                src="/playground_assets/vector1583-799q.svg"
                alt="Vector1583"
                className="home-vector0272"
              />
              <img
                src="/playground_assets/vector1583-bcsi.svg"
                alt="Vector1583"
                className="home-vector0273"
              />
              <img
                src="/playground_assets/vector1583-9znlf.svg"
                alt="Vector1583"
                className="home-vector0274"
              />
              <img
                src="/playground_assets/vector1583-sxee.svg"
                alt="Vector1583"
                className="home-vector0275"
              />
              <img
                src="/playground_assets/vector1583-nhr6.svg"
                alt="Vector1583"
                className="home-vector0276"
              />
              <img
                src="/playground_assets/vector1583-07oc.svg"
                alt="Vector1583"
                className="home-vector0277"
              />
              <img
                src="/playground_assets/vector1583-dim8.svg"
                alt="Vector1583"
                className="home-vector0278"
              />
              <img
                src="/playground_assets/vector1583-m7it.svg"
                alt="Vector1583"
                className="home-vector0279"
              />
              <img
                src="/playground_assets/vector1583-ox5.svg"
                alt="Vector1583"
                className="home-vector0280"
              />
              <img
                src="/playground_assets/vector1583-dhw8.svg"
                alt="Vector1583"
                className="home-vector0281"
              />
              <img
                src="/playground_assets/vector1584-ju1.svg"
                alt="Vector1584"
                className="home-vector0282"
              />
              <img
                src="/playground_assets/vector1584-5uxe.svg"
                alt="Vector1584"
                className="home-vector0283"
              />
              <img
                src="/playground_assets/vector1584-970c.svg"
                alt="Vector1584"
                className="home-vector0284"
              />
              <img
                src="/playground_assets/vector1584-ftcd.svg"
                alt="Vector1584"
                className="home-vector0285"
              />
              <img
                src="/playground_assets/vector1584-1m8p.svg"
                alt="Vector1584"
                className="home-vector0286"
              />
              <img
                src="/playground_assets/vector1584-7jt.svg"
                alt="Vector1584"
                className="home-vector0287"
              />
              <img
                src="/playground_assets/vector1584-r3ne.svg"
                alt="Vector1584"
                className="home-vector0288"
              />
              <img
                src="/playground_assets/vector1584-din.svg"
                alt="Vector1584"
                className="home-vector0289"
              />
              <img
                src="/playground_assets/vector1584-g3lj.svg"
                alt="Vector1584"
                className="home-vector0290"
              />
              <img
                src="/playground_assets/vector1584-3btf.svg"
                alt="Vector1584"
                className="home-vector0291"
              />
              <img
                src="/playground_assets/vector1585-c01h.svg"
                alt="Vector1585"
                className="home-vector0292"
              />
              <img
                src="/playground_assets/vector1585-nt.svg"
                alt="Vector1585"
                className="home-vector0293"
              />
              <img
                src="/playground_assets/vector1585-0w46.svg"
                alt="Vector1585"
                className="home-vector0294"
              />
              <img
                src="/playground_assets/vector1585-dlv8.svg"
                alt="Vector1585"
                className="home-vector0295"
              />
              <img
                src="/playground_assets/vector1585-u9y7.svg"
                alt="Vector1585"
                className="home-vector0296"
              />
              <img
                src="/playground_assets/vector1585-4vxw.svg"
                alt="Vector1585"
                className="home-vector0297"
              />
              <img
                src="/playground_assets/vector1585-rdq9.svg"
                alt="Vector1585"
                className="home-vector0298"
              />
              <img
                src="/playground_assets/vector1585-qr4e.svg"
                alt="Vector1585"
                className="home-vector0299"
              />
              <img
                src="/playground_assets/vector1585-x1al.svg"
                alt="Vector1585"
                className="home-vector0300"
              />
              <img
                src="/playground_assets/vector1585-7dap.svg"
                alt="Vector1585"
                className="home-vector0301"
              />
              <img
                src="/playground_assets/vector1586-it2k.svg"
                alt="Vector1586"
                className="home-vector0302"
              />
              <img
                src="/playground_assets/vector1586-ks9r.svg"
                alt="Vector1586"
                className="home-vector0303"
              />
              <img
                src="/playground_assets/vector1586-soig.svg"
                alt="Vector1586"
                className="home-vector0304"
              />
              <img
                src="/playground_assets/vector1586-mzcn.svg"
                alt="Vector1586"
                className="home-vector0305"
              />
              <img
                src="/playground_assets/vector1586-rb9h.svg"
                alt="Vector1586"
                className="home-vector0306"
              />
              <img
                src="/playground_assets/vector1586-xyl.svg"
                alt="Vector1586"
                className="home-vector0307"
              />
              <img
                src="/playground_assets/vector1586-7k8q.svg"
                alt="Vector1586"
                className="home-vector0308"
              />
              <img
                src="/playground_assets/vector1586-fwj.svg"
                alt="Vector1586"
                className="home-vector0309"
              />
              <img
                src="/playground_assets/vector1586-hbh5.svg"
                alt="Vector1586"
                className="home-vector0310"
              />
              <img
                src="/playground_assets/vector1586-k3vh.svg"
                alt="Vector1586"
                className="home-vector0311"
              />
              <img
                src="/playground_assets/vector1587-09ik.svg"
                alt="Vector1587"
                className="home-vector0312"
              />
              <img
                src="/playground_assets/vector1587-a5ab.svg"
                alt="Vector1587"
                className="home-vector0313"
              />
              <img
                src="/playground_assets/vector1587-1lo.svg"
                alt="Vector1587"
                className="home-vector0314"
              />
              <img
                src="/playground_assets/vector1587-8r9w.svg"
                alt="Vector1587"
                className="home-vector0315"
              />
              <img
                src="/playground_assets/vector1587-o9sq.svg"
                alt="Vector1587"
                className="home-vector0316"
              />
              <img
                src="/playground_assets/vector1587-9vrb.svg"
                alt="Vector1587"
                className="home-vector0317"
              />
              <img
                src="/playground_assets/vector1587-w7l.svg"
                alt="Vector1587"
                className="home-vector0318"
              />
              <img
                src="/playground_assets/vector1587-ot79.svg"
                alt="Vector1587"
                className="home-vector0319"
              />
              <img
                src="/playground_assets/vector1587-oplt.svg"
                alt="Vector1587"
                className="home-vector0320"
              />
              <img
                src="/playground_assets/vector1587-2sk8.svg"
                alt="Vector1587"
                className="home-vector0321"
              />
              <img
                src="/playground_assets/vector1588-vxc.svg"
                alt="Vector1588"
                className="home-vector0322"
              />
              <img
                src="/playground_assets/vector1588-rkas.svg"
                alt="Vector1588"
                className="home-vector0323"
              />
              <img
                src="/playground_assets/vector1588-s6zt.svg"
                alt="Vector1588"
                className="home-vector0324"
              />
              <img
                src="/playground_assets/vector1588-it7.svg"
                alt="Vector1588"
                className="home-vector0325"
              />
              <img
                src="/playground_assets/vector1588-5xe.svg"
                alt="Vector1588"
                className="home-vector0326"
              />
              <img
                src="/playground_assets/vector1588-yiaf.svg"
                alt="Vector1588"
                className="home-vector0327"
              />
              <img
                src="/playground_assets/vector1588-c5q8.svg"
                alt="Vector1588"
                className="home-vector0328"
              />
              <img
                src="/playground_assets/vector1588-yo4.svg"
                alt="Vector1588"
                className="home-vector0329"
              />
              <img
                src="/playground_assets/vector1588-eelo.svg"
                alt="Vector1588"
                className="home-vector0330"
              />
              <img
                src="/playground_assets/vector1588-m79v.svg"
                alt="Vector1588"
                className="home-vector0331"
              />
              <img
                src="/playground_assets/vector1589-nrlv.svg"
                alt="Vector1589"
                className="home-vector0332"
              />
              <img
                src="/playground_assets/vector1589-u4b.svg"
                alt="Vector1589"
                className="home-vector0333"
              />
              <img
                src="/playground_assets/vector1589-agm6.svg"
                alt="Vector1589"
                className="home-vector0334"
              />
              <img
                src="/playground_assets/vector1589-2h.svg"
                alt="Vector1589"
                className="home-vector0335"
              />
              <img
                src="/playground_assets/vector1589-4fi.svg"
                alt="Vector1589"
                className="home-vector0336"
              />
              <img
                src="/playground_assets/vector1589-mo8k.svg"
                alt="Vector1589"
                className="home-vector0337"
              />
            </div>
          </div>
          <div className="home-mobileloginpana1">
            <div className="home-freepikbackgroundcompleteinject4">
              <img
                src="/playground_assets/vector1589-5v2q.svg"
                alt="Vector1589"
                className="home-vector0338"
              />
              <img
                src="/playground_assets/vector1589-aqux.svg"
                alt="Vector1589"
                className="home-vector0339"
              />
              <img
                src="/playground_assets/vector1590-52kj.svg"
                alt="Vector1590"
                className="home-vector0340"
              />
              <img
                src="/playground_assets/vector1590-29d9.svg"
                alt="Vector1590"
                className="home-vector0341"
              />
              <img
                src="/playground_assets/vector1590-9fal.svg"
                alt="Vector1590"
                className="home-vector0342"
              />
              <img
                src="/playground_assets/vector1590-cs9i.svg"
                alt="Vector1590"
                className="home-vector0343"
              />
              <img
                src="/playground_assets/vector1590-wzmj.svg"
                alt="Vector1590"
                className="home-vector0344"
              />
              <img
                src="/playground_assets/vector1590-trh6.svg"
                alt="Vector1590"
                className="home-vector0345"
              />
              <img
                src="/playground_assets/vector1590-ox8q.svg"
                alt="Vector1590"
                className="home-vector0346"
              />
              <img
                src="/playground_assets/vector1590-46c9f.svg"
                alt="Vector1590"
                className="home-vector0347"
              />
              <img
                src="/playground_assets/vector1590-huie.svg"
                alt="Vector1590"
                className="home-vector0348"
              />
              <img
                src="/playground_assets/vector1590-xhv8a.svg"
                alt="Vector1590"
                className="home-vector0349"
              />
              <img
                src="/playground_assets/vector1591-5as5.svg"
                alt="Vector1591"
                className="home-vector0350"
              />
              <img
                src="/playground_assets/vector1591-rce.svg"
                alt="Vector1591"
                className="home-vector0351"
              />
              <img
                src="/playground_assets/vector1591-eq3.svg"
                alt="Vector1591"
                className="home-vector0352"
              />
              <img
                src="/playground_assets/vector1591-k2l.svg"
                alt="Vector1591"
                className="home-vector0353"
              />
              <img
                src="/playground_assets/vector1591-gbs.svg"
                alt="Vector1591"
                className="home-vector0354"
              />
              <img
                src="/playground_assets/vector1591-s7ou.svg"
                alt="Vector1591"
                className="home-vector0355"
              />
              <img
                src="/playground_assets/vector1591-8kdd.svg"
                alt="Vector1591"
                className="home-vector0356"
              />
              <img
                src="/playground_assets/vector1591-j97.svg"
                alt="Vector1591"
                className="home-vector0357"
              />
              <img
                src="/playground_assets/vector1591-d3ul.svg"
                alt="Vector1591"
                className="home-vector0358"
              />
              <img
                src="/playground_assets/vector1591-2d4p.svg"
                alt="Vector1591"
                className="home-vector0359"
              />
              <img
                src="/playground_assets/vector1592-prgk.svg"
                alt="Vector1592"
                className="home-vector0360"
              />
              <img
                src="/playground_assets/vector1592-9kly.svg"
                alt="Vector1592"
                className="home-vector0361"
              />
              <img
                src="/playground_assets/vector1592-pp2l.svg"
                alt="Vector1592"
                className="home-vector0362"
              />
              <img
                src="/playground_assets/vector1592-31jb.svg"
                alt="Vector1592"
                className="home-vector0363"
              />
              <img
                src="/playground_assets/vector1592-3fu.svg"
                alt="Vector1592"
                className="home-vector0364"
              />
              <img
                src="/playground_assets/vector1592-3ox3n.svg"
                alt="Vector1592"
                className="home-vector0365"
              />
              <img
                src="/playground_assets/vector1592-dtvj.svg"
                alt="Vector1592"
                className="home-vector0366"
              />
              <img
                src="/playground_assets/vector1592-hwc.svg"
                alt="Vector1592"
                className="home-vector0367"
              />
              <img
                src="/playground_assets/vector1592-l36.svg"
                alt="Vector1592"
                className="home-vector0368"
              />
              <img
                src="/playground_assets/vector1592-hapg.svg"
                alt="Vector1592"
                className="home-vector0369"
              />
              <img
                src="/playground_assets/vector1593-zaza.svg"
                alt="Vector1593"
                className="home-vector0370"
              />
            </div>
            <div className="home-freepik-floorinject4">
              <img
                src="/playground_assets/vector1593-exz.svg"
                alt="Vector1593"
                className="home-vector0371"
              />
            </div>
            <div className="home-freepik-plantinject4">
              <img
                src="/playground_assets/vector1593-b4p.svg"
                alt="Vector1593"
                className="home-vector0372"
              />
              <img
                src="/playground_assets/vector1593-zf75.svg"
                alt="Vector1593"
                className="home-vector0373"
              />
              <img
                src="/playground_assets/vector1593-i4h4.svg"
                alt="Vector1593"
                className="home-vector0374"
              />
              <img
                src="/playground_assets/vector1593-w1td.svg"
                alt="Vector1593"
                className="home-vector0375"
              />
              <img
                src="/playground_assets/vector1593-dk5s.svg"
                alt="Vector1593"
                className="home-vector0376"
              />
              <img
                src="/playground_assets/vector1593-oxm9.svg"
                alt="Vector1593"
                className="home-vector0377"
              />
            </div>
            <div className="home-freepik-padlockinject4">
              <img
                src="/playground_assets/vector1594-llw.svg"
                alt="Vector1594"
                className="home-vector0378"
              />
              <img
                src="/playground_assets/vector1594-csx.svg"
                alt="Vector1594"
                className="home-vector0379"
              />
              <img
                src="/playground_assets/vector1594-9m8.svg"
                alt="Vector1594"
                className="home-vector0380"
              />
              <img
                src="/playground_assets/vector1594-1kyf.svg"
                alt="Vector1594"
                className="home-vector0381"
              />
              <img
                src="/playground_assets/vector1594-ajc.svg"
                alt="Vector1594"
                className="home-vector0382"
              />
            </div>
            <div className="home-freepik-deviceinject4">
              <img
                src="/playground_assets/vector1594-y4k8.svg"
                alt="Vector1594"
                className="home-vector0383"
              />
              <img
                src="/playground_assets/vector1594-5vxn.svg"
                alt="Vector1594"
                className="home-vector0384"
              />
              <img
                src="/playground_assets/vector1594-omz.svg"
                alt="Vector1594"
                className="home-vector0385"
              />
              <span className="home-text165">
                <span>SING UP</span>
              </span>
              <img
                src="/playground_assets/vector1595-dbat.svg"
                alt="Vector1595"
                className="home-vector0386"
              />
              <img
                src="/playground_assets/vector1595-xwln.svg"
                alt="Vector1595"
                className="home-vector0387"
              />
              <img
                src="/playground_assets/vector1595-moab.svg"
                alt="Vector1595"
                className="home-vector0388"
              />
              <img
                src="/playground_assets/vector1595-ifui.svg"
                alt="Vector1595"
                className="home-vector0389"
              />
              <img
                src="/playground_assets/vector1595-e2t6.svg"
                alt="Vector1595"
                className="home-vector0390"
              />
              <img
                src="/playground_assets/vector1595-e7o.svg"
                alt="Vector1595"
                className="home-vector0391"
              />
              <img
                src="/playground_assets/vector1595-foam.svg"
                alt="Vector1595"
                className="home-vector0392"
              />
              <img
                src="/playground_assets/vector1595-zal4.svg"
                alt="Vector1595"
                className="home-vector0393"
              />
              <img
                src="/playground_assets/vector1595-w7ggo.svg"
                alt="Vector1595"
                className="home-vector0394"
              />
              <img
                src="/playground_assets/vector1596-ha5j.svg"
                alt="Vector1596"
                className="home-vector0395"
              />
              <img
                src="/playground_assets/vector1596-4rjc.svg"
                alt="Vector1596"
                className="home-vector0396"
              />
              <img
                src="/playground_assets/vector1596-xlbn.svg"
                alt="Vector1596"
                className="home-vector0397"
              />
              <img
                src="/playground_assets/vector1596-qtlh.svg"
                alt="Vector1596"
                className="home-vector0398"
              />
              <img
                src="/playground_assets/vector1596-6pid.svg"
                alt="Vector1596"
                className="home-vector0399"
              />
              <img
                src="/playground_assets/vector1596-rb9.svg"
                alt="Vector1596"
                className="home-vector0400"
              />
              <img
                src="/playground_assets/vector1596-jo3b.svg"
                alt="Vector1596"
                className="home-vector0401"
              />
              <img
                src="/playground_assets/vector1596-vvf2.svg"
                alt="Vector1596"
                className="home-vector0402"
              />
              <img
                src="/playground_assets/vector1596-mots.svg"
                alt="Vector1596"
                className="home-vector0403"
              />
              <img
                src="/playground_assets/vector1596-u0he.svg"
                alt="Vector1596"
                className="home-vector0404"
              />
              <img
                src="/playground_assets/vector1597-efyd.svg"
                alt="Vector1597"
                className="home-vector0405"
              />
              <img
                src="/playground_assets/vector1597-iwes.svg"
                alt="Vector1597"
                className="home-vector0406"
              />
              <img
                src="/playground_assets/vector1597-07ag.svg"
                alt="Vector1597"
                className="home-vector0407"
              />
              <div className="home-group30">
                <img
                  src="/playground_assets/vector1597-9nm9.svg"
                  alt="Vector1597"
                  className="home-vector0408"
                />
                <img
                  src="/playground_assets/vector1597-0wjl.svg"
                  alt="Vector1597"
                  className="home-vector0409"
                />
                <img
                  src="/playground_assets/vector1597-rbo.svg"
                  alt="Vector1597"
                  className="home-vector0410"
                />
                <img
                  src="/playground_assets/vector1597-eyr.svg"
                  alt="Vector1597"
                  className="home-vector0411"
                />
                <img
                  src="/playground_assets/vector1597-o3fo.svg"
                  alt="Vector1597"
                  className="home-vector0412"
                />
                <img
                  src="/playground_assets/vector1597-njha.svg"
                  alt="Vector1597"
                  className="home-vector0413"
                />
                <img
                  src="/playground_assets/vector1598-d49n.svg"
                  alt="Vector1598"
                  className="home-vector0414"
                />
                <img
                  src="/playground_assets/vector1598-6l8k.svg"
                  alt="Vector1598"
                  className="home-vector0415"
                />
                <img
                  src="/playground_assets/vector1598-hbb9.svg"
                  alt="Vector1598"
                  className="home-vector0416"
                />
              </div>
              <img
                src="/playground_assets/vector1598-jpxf.svg"
                alt="Vector1598"
                className="home-vector0417"
              />
              <img
                src="/playground_assets/vector1598-49e.svg"
                alt="Vector1598"
                className="home-vector0418"
              />
              <img
                src="/playground_assets/vector1598-2d3c.svg"
                alt="Vector1598"
                className="home-vector0419"
              />
              <img
                src="/playground_assets/vector1598-sh5.svg"
                alt="Vector1598"
                className="home-vector0420"
              />
            </div>
            <div className="home-freepikspeechbubbleinject4">
              <img
                src="/playground_assets/vector1598-e9ef.svg"
                alt="Vector1598"
                className="home-vector0421"
              />
              <img
                src="/playground_assets/vector1598-fx7.svg"
                alt="Vector1598"
                className="home-vector0422"
              />
              <img
                src="/playground_assets/vector1599-034c.svg"
                alt="Vector1599"
                className="home-vector0423"
              />
            </div>
            <div className="home-freepik-characterinject4">
              <img
                src="/playground_assets/vector1599-pmyt.svg"
                alt="Vector1599"
                className="home-vector0424"
              />
              <img
                src="/playground_assets/vector1599-ytup.svg"
                alt="Vector1599"
                className="home-vector0425"
              />
              <img
                src="/playground_assets/vector1599-oh7n.svg"
                alt="Vector1599"
                className="home-vector0426"
              />
              <img
                src="/playground_assets/vector1599-360u.svg"
                alt="Vector1599"
                className="home-vector0427"
              />
              <img
                src="/playground_assets/vector1599-rl2rj.svg"
                alt="Vector1599"
                className="home-vector0428"
              />
              <img
                src="/playground_assets/vector1599-sqpj.svg"
                alt="Vector1599"
                className="home-vector0429"
              />
              <img
                src="/playground_assets/vector1599-m35p.svg"
                alt="Vector1599"
                className="home-vector0430"
              />
              <img
                src="/playground_assets/vector1599-7xwu.svg"
                alt="Vector1599"
                className="home-vector0431"
              />
              <img
                src="/playground_assets/vector1510-m1ej.svg"
                alt="Vector1510"
                className="home-vector0432"
              />
              <img
                src="/playground_assets/vector1510-07ru.svg"
                alt="Vector1510"
                className="home-vector0433"
              />
              <img
                src="/playground_assets/vector1510-qc6c.svg"
                alt="Vector1510"
                className="home-vector0434"
              />
              <img
                src="/playground_assets/vector1510-5ocm.svg"
                alt="Vector1510"
                className="home-vector0435"
              />
              <img
                src="/playground_assets/vector1510-drn.svg"
                alt="Vector1510"
                className="home-vector0436"
              />
              <img
                src="/playground_assets/vector1510-7hnx.svg"
                alt="Vector1510"
                className="home-vector0437"
              />
              <img
                src="/playground_assets/vector1510-mfoq.svg"
                alt="Vector1510"
                className="home-vector0438"
              />
              <img
                src="/playground_assets/vector1510-8f.svg"
                alt="Vector1510"
                className="home-vector0439"
              />
              <img
                src="/playground_assets/vector1510-4ixo.svg"
                alt="Vector1510"
                className="home-vector0440"
              />
              <img
                src="/playground_assets/vector1510-ob9tj.svg"
                alt="Vector1510"
                className="home-vector0441"
              />
              <img
                src="/playground_assets/vector1510-x529.svg"
                alt="Vector1510"
                className="home-vector0442"
              />
              <img
                src="/playground_assets/vector1510-w7p.svg"
                alt="Vector1510"
                className="home-vector0443"
              />
              <img
                src="/playground_assets/vector1510-03lb.svg"
                alt="Vector1510"
                className="home-vector0444"
              />
              <img
                src="/playground_assets/vector1510-ywpw.svg"
                alt="Vector1510"
                className="home-vector0445"
              />
              <img
                src="/playground_assets/vector1510-dsp.svg"
                alt="Vector1510"
                className="home-vector0446"
              />
              <img
                src="/playground_assets/vector1510-vxo.svg"
                alt="Vector1510"
                className="home-vector0447"
              />
              <img
                src="/playground_assets/vector1510-bog.svg"
                alt="Vector1510"
                className="home-vector0448"
              />
              <img
                src="/playground_assets/vector1510-zfxn.svg"
                alt="Vector1510"
                className="home-vector0449"
              />
              <img
                src="/playground_assets/vector1510-2mo.svg"
                alt="Vector1510"
                className="home-vector0450"
              />
              <img
                src="/playground_assets/vector1510-mrlt.svg"
                alt="Vector1510"
                className="home-vector0451"
              />
              <img
                src="/playground_assets/vector1510-7oi.svg"
                alt="Vector1510"
                className="home-vector0452"
              />
              <img
                src="/playground_assets/vector1510-zvik.svg"
                alt="Vector1510"
                className="home-vector0453"
              />
              <img
                src="/playground_assets/vector1510-20g.svg"
                alt="Vector1510"
                className="home-vector0454"
              />
              <img
                src="/playground_assets/vector1510-gyz.svg"
                alt="Vector1510"
                className="home-vector0455"
              />
              <img
                src="/playground_assets/vector1510-nhe.svg"
                alt="Vector1510"
                className="home-vector0456"
              />
              <img
                src="/playground_assets/vector1510-j4l.svg"
                alt="Vector1510"
                className="home-vector0457"
              />
              <img
                src="/playground_assets/vector1510-beb9.svg"
                alt="Vector1510"
                className="home-vector0458"
              />
              <div className="home-group31">
                <img
                  src="/playground_assets/vector1510-1pzi.svg"
                  alt="Vector1510"
                  className="home-vector0459"
                />
              </div>
            </div>
          </div>
          <div className="home-highfivepana1">
            <div className="home-freepikbackgroundcompleteinject7">
              <img
                src="/playground_assets/vector1510-ozqk.svg"
                alt="Vector1510"
                className="home-vector0460"
              />
              <img
                src="/playground_assets/vector1510-flbk.svg"
                alt="Vector1510"
                className="home-vector0461"
              />
              <img
                src="/playground_assets/vector1510-whoc.svg"
                alt="Vector1510"
                className="home-vector0462"
              />
              <img
                src="/playground_assets/vector1510-543.svg"
                alt="Vector1510"
                className="home-vector0463"
              />
              <img
                src="/playground_assets/vector1510-xiio.svg"
                alt="Vector1510"
                className="home-vector0464"
              />
              <img
                src="/playground_assets/vector1510-nyh.svg"
                alt="Vector1510"
                className="home-vector0465"
              />
              <img
                src="/playground_assets/vector1510-dgdb.svg"
                alt="Vector1510"
                className="home-vector0466"
              />
              <img
                src="/playground_assets/vector1510-5dig.svg"
                alt="Vector1510"
                className="home-vector0467"
              />
              <img
                src="/playground_assets/vector1510-hyl.svg"
                alt="Vector1510"
                className="home-vector0468"
              />
              <img
                src="/playground_assets/vector1510-61rp.svg"
                alt="Vector1510"
                className="home-vector0469"
              />
              <img
                src="/playground_assets/vector1510-l75e.svg"
                alt="Vector1510"
                className="home-vector0470"
              />
              <img
                src="/playground_assets/vector1510-o28v.svg"
                alt="Vector1510"
                className="home-vector0471"
              />
              <img
                src="/playground_assets/vector1510-3f7.svg"
                alt="Vector1510"
                className="home-vector0472"
              />
              <img
                src="/playground_assets/vector1510-3ip.svg"
                alt="Vector1510"
                className="home-vector0473"
              />
              <img
                src="/playground_assets/vector1510-j9tn.svg"
                alt="Vector1510"
                className="home-vector0474"
              />
              <img
                src="/playground_assets/vector1510-tem.svg"
                alt="Vector1510"
                className="home-vector0475"
              />
              <img
                src="/playground_assets/vector1510-28s.svg"
                alt="Vector1510"
                className="home-vector0476"
              />
              <img
                src="/playground_assets/vector1510-rhti.svg"
                alt="Vector1510"
                className="home-vector0477"
              />
              <img
                src="/playground_assets/vector1510-1enb.svg"
                alt="Vector1510"
                className="home-vector0478"
              />
              <img
                src="/playground_assets/vector1510-8pgs.svg"
                alt="Vector1510"
                className="home-vector0479"
              />
              <img
                src="/playground_assets/vector1510-s3wg.svg"
                alt="Vector1510"
                className="home-vector0480"
              />
              <img
                src="/playground_assets/vector1510-3kwa.svg"
                alt="Vector1510"
                className="home-vector0481"
              />
              <img
                src="/playground_assets/vector1510-6yl.svg"
                alt="Vector1510"
                className="home-vector0482"
              />
              <img
                src="/playground_assets/vector1510-em3.svg"
                alt="Vector1510"
                className="home-vector0483"
              />
              <img
                src="/playground_assets/vector1510-dwxw.svg"
                alt="Vector1510"
                className="home-vector0484"
              />
              <img
                src="/playground_assets/vector1510-k8dm.svg"
                alt="Vector1510"
                className="home-vector0485"
              />
              <img
                src="/playground_assets/vector1510-0gm.svg"
                alt="Vector1510"
                className="home-vector0486"
              />
              <img
                src="/playground_assets/vector1510-2pqk.svg"
                alt="Vector1510"
                className="home-vector0487"
              />
              <img
                src="/playground_assets/vector1510-9f1a.svg"
                alt="Vector1510"
                className="home-vector0488"
              />
              <img
                src="/playground_assets/vector1510-y4eu.svg"
                alt="Vector1510"
                className="home-vector0489"
              />
              <img
                src="/playground_assets/vector1510-a3j.svg"
                alt="Vector1510"
                className="home-vector0490"
              />
              <img
                src="/playground_assets/vector1510-ql73.svg"
                alt="Vector1510"
                className="home-vector0491"
              />
              <img
                src="/playground_assets/vector1510-btg4.svg"
                alt="Vector1510"
                className="home-vector0492"
              />
              <img
                src="/playground_assets/vector1510-fjni.svg"
                alt="Vector1510"
                className="home-vector0493"
              />
              <img
                src="/playground_assets/vector1510-ko1l.svg"
                alt="Vector1510"
                className="home-vector0494"
              />
              <img
                src="/playground_assets/vector1510-5oio.svg"
                alt="Vector1510"
                className="home-vector0495"
              />
              <img
                src="/playground_assets/vector1510-6pye.svg"
                alt="Vector1510"
                className="home-vector0496"
              />
              <img
                src="/playground_assets/vector1510-dzno.svg"
                alt="Vector1510"
                className="home-vector0497"
              />
              <img
                src="/playground_assets/vector1510-848l.svg"
                alt="Vector1510"
                className="home-vector0498"
              />
              <img
                src="/playground_assets/vector1510-m8oo.svg"
                alt="Vector1510"
                className="home-vector0499"
              />
              <img
                src="/playground_assets/vector1510-8aq.svg"
                alt="Vector1510"
                className="home-vector0500"
              />
              <img
                src="/playground_assets/vector1510-tdz3h.svg"
                alt="Vector1510"
                className="home-vector0501"
              />
              <img
                src="/playground_assets/vector1510-wio.svg"
                alt="Vector1510"
                className="home-vector0502"
              />
              <img
                src="/playground_assets/vector1510-dot.svg"
                alt="Vector1510"
                className="home-vector0503"
              />
              <img
                src="/playground_assets/vector1510-n7vq.svg"
                alt="Vector1510"
                className="home-vector0504"
              />
              <img
                src="/playground_assets/vector1510-5suf.svg"
                alt="Vector1510"
                className="home-vector0505"
              />
              <img
                src="/playground_assets/vector1510-swz9.svg"
                alt="Vector1510"
                className="home-vector0506"
              />
              <img
                src="/playground_assets/vector1510-ukdf.svg"
                alt="Vector1510"
                className="home-vector0507"
              />
              <img
                src="/playground_assets/vector1510-8odl.svg"
                alt="Vector1510"
                className="home-vector0508"
              />
              <img
                src="/playground_assets/vector1510-gol8.svg"
                alt="Vector1510"
                className="home-vector0509"
              />
              <img
                src="/playground_assets/vector1510-x9z.svg"
                alt="Vector1510"
                className="home-vector0510"
              />
              <img
                src="/playground_assets/vector1510-8d5.svg"
                alt="Vector1510"
                className="home-vector0511"
              />
              <img
                src="/playground_assets/vector1510-9oof.svg"
                alt="Vector1510"
                className="home-vector0512"
              />
            </div>
            <div className="home-freepik-floorinject7">
              <img
                src="/playground_assets/vector1510-0grr.svg"
                alt="Vector1510"
                className="home-vector0513"
              />
            </div>
            <div className="home-freepikcharacter2inject7">
              <img
                src="/playground_assets/vector1510-1ms.svg"
                alt="Vector1510"
                className="home-vector0514"
              />
              <img
                src="/playground_assets/vector1510-xvuc.svg"
                alt="Vector1510"
                className="home-vector0515"
              />
              <img
                src="/playground_assets/vector1510-at0s.svg"
                alt="Vector1510"
                className="home-vector0516"
              />
              <img
                src="/playground_assets/vector1510-bel8.svg"
                alt="Vector1510"
                className="home-vector0517"
              />
              <img
                src="/playground_assets/vector1510-mmcj.svg"
                alt="Vector1510"
                className="home-vector0518"
              />
              <img
                src="/playground_assets/vector1510-pra.svg"
                alt="Vector1510"
                className="home-vector0519"
              />
              <img
                src="/playground_assets/vector1510-ufp.svg"
                alt="Vector1510"
                className="home-vector0520"
              />
              <img
                src="/playground_assets/vector1510-kiqk.svg"
                alt="Vector1510"
                className="home-vector0521"
              />
              <img
                src="/playground_assets/vector1510-13b3x.svg"
                alt="Vector1510"
                className="home-vector0522"
              />
              <img
                src="/playground_assets/vector1510-5el.svg"
                alt="Vector1510"
                className="home-vector0523"
              />
              <img
                src="/playground_assets/vector1510-vbn.svg"
                alt="Vector1510"
                className="home-vector0524"
              />
              <img
                src="/playground_assets/vector1510-0l1c.svg"
                alt="Vector1510"
                className="home-vector0525"
              />
              <img
                src="/playground_assets/vector1510-066.svg"
                alt="Vector1510"
                className="home-vector0526"
              />
              <img
                src="/playground_assets/vector1511-eenn.svg"
                alt="Vector1511"
                className="home-vector0527"
              />
              <img
                src="/playground_assets/vector1511-2ze.svg"
                alt="Vector1511"
                className="home-vector0528"
              />
              <img
                src="/playground_assets/vector1511-sbdh.svg"
                alt="Vector1511"
                className="home-vector0529"
              />
              <img
                src="/playground_assets/vector1511-mcam.svg"
                alt="Vector1511"
                className="home-vector0530"
              />
              <img
                src="/playground_assets/vector1511-5d5.svg"
                alt="Vector1511"
                className="home-vector0531"
              />
              <img
                src="/playground_assets/vector1511-qgxm.svg"
                alt="Vector1511"
                className="home-vector0532"
              />
              <div className="home-group32">
                <img
                  src="/playground_assets/vector1511-f3xb.svg"
                  alt="Vector1511"
                  className="home-vector0533"
                />
              </div>
              <div className="home-group33">
                <img
                  src="/playground_assets/vector1511-pt.svg"
                  alt="Vector1511"
                  className="home-vector0534"
                />
              </div>
              <img
                src="/playground_assets/vector1511-dco7.svg"
                alt="Vector1511"
                className="home-vector0535"
              />
              <img
                src="/playground_assets/vector1511-tik.svg"
                alt="Vector1511"
                className="home-vector0536"
              />
              <img
                src="/playground_assets/vector1511-adi.svg"
                alt="Vector1511"
                className="home-vector0537"
              />
              <img
                src="/playground_assets/vector1511-c5.svg"
                alt="Vector1511"
                className="home-vector0538"
              />
              <img
                src="/playground_assets/vector1511-sei.svg"
                alt="Vector1511"
                className="home-vector0539"
              />
              <img
                src="/playground_assets/vector1511-ys2u.svg"
                alt="Vector1511"
                className="home-vector0540"
              />
              <img
                src="/playground_assets/vector1511-3zjf.svg"
                alt="Vector1511"
                className="home-vector0541"
              />
              <img
                src="/playground_assets/vector1511-04p.svg"
                alt="Vector1511"
                className="home-vector0542"
              />
              <img
                src="/playground_assets/vector1511-uo6o.svg"
                alt="Vector1511"
                className="home-vector0543"
              />
              <img
                src="/playground_assets/vector1511-66cf.svg"
                alt="Vector1511"
                className="home-vector0544"
              />
              <img
                src="/playground_assets/vector1511-3rmx.svg"
                alt="Vector1511"
                className="home-vector0545"
              />
              <img
                src="/playground_assets/vector1511-0n6p.svg"
                alt="Vector1511"
                className="home-vector0546"
              />
              <img
                src="/playground_assets/vector1511-a35o.svg"
                alt="Vector1511"
                className="home-vector0547"
              />
              <img
                src="/playground_assets/vector1511-xzsc.svg"
                alt="Vector1511"
                className="home-vector0548"
              />
              <img
                src="/playground_assets/vector1511-vnzl.svg"
                alt="Vector1511"
                className="home-vector0549"
              />
              <img
                src="/playground_assets/vector1511-trw6.svg"
                alt="Vector1511"
                className="home-vector0550"
              />
              <img
                src="/playground_assets/vector1511-csy.svg"
                alt="Vector1511"
                className="home-vector0551"
              />
              <img
                src="/playground_assets/vector1511-2fjs.svg"
                alt="Vector1511"
                className="home-vector0552"
              />
              <img
                src="/playground_assets/vector1511-ypob.svg"
                alt="Vector1511"
                className="home-vector0553"
              />
              <img
                src="/playground_assets/vector1511-msj.svg"
                alt="Vector1511"
                className="home-vector0554"
              />
              <img
                src="/playground_assets/vector1511-py4d.svg"
                alt="Vector1511"
                className="home-vector0555"
              />
              <img
                src="/playground_assets/vector1511-psr.svg"
                alt="Vector1511"
                className="home-vector0556"
              />
              <img
                src="/playground_assets/vector1511-dft.svg"
                alt="Vector1511"
                className="home-vector0557"
              />
              <img
                src="/playground_assets/vector1511-4kbo.svg"
                alt="Vector1511"
                className="home-vector0558"
              />
              <img
                src="/playground_assets/vector1511-q01s.svg"
                alt="Vector1511"
                className="home-vector0559"
              />
              <img
                src="/playground_assets/vector1511-9wu.svg"
                alt="Vector1511"
                className="home-vector0560"
              />
              <img
                src="/playground_assets/vector1511-z4q9.svg"
                alt="Vector1511"
                className="home-vector0561"
              />
              <img
                src="/playground_assets/vector1511-f95.svg"
                alt="Vector1511"
                className="home-vector0562"
              />
              <img
                src="/playground_assets/vector1511-2gde.svg"
                alt="Vector1511"
                className="home-vector0563"
              />
              <img
                src="/playground_assets/vector1511-i6me.svg"
                alt="Vector1511"
                className="home-vector0564"
              />
              <img
                src="/playground_assets/vector1511-86tc.svg"
                alt="Vector1511"
                className="home-vector0565"
              />
              <img
                src="/playground_assets/vector1511-5pzu.svg"
                alt="Vector1511"
                className="home-vector0566"
              />
              <img
                src="/playground_assets/vector1511-88jm.svg"
                alt="Vector1511"
                className="home-vector0567"
              />
              <img
                src="/playground_assets/vector1511-nohv.svg"
                alt="Vector1511"
                className="home-vector0568"
              />
              <img
                src="/playground_assets/vector1511-t1zr.svg"
                alt="Vector1511"
                className="home-vector0569"
              />
              <img
                src="/playground_assets/vector1511-400o.svg"
                alt="Vector1511"
                className="home-vector0570"
              />
              <img
                src="/playground_assets/vector1511-9vrc.svg"
                alt="Vector1511"
                className="home-vector0571"
              />
              <img
                src="/playground_assets/vector1511-91o.svg"
                alt="Vector1511"
                className="home-vector0572"
              />
              <img
                src="/playground_assets/vector1511-yxo.svg"
                alt="Vector1511"
                className="home-vector0573"
              />
              <img
                src="/playground_assets/vector1511-p8mj.svg"
                alt="Vector1511"
                className="home-vector0574"
              />
              <img
                src="/playground_assets/vector1511-2py6.svg"
                alt="Vector1511"
                className="home-vector0575"
              />
              <img
                src="/playground_assets/vector1511-1wwn.svg"
                alt="Vector1511"
                className="home-vector0576"
              />
              <img
                src="/playground_assets/vector1511-707k.svg"
                alt="Vector1511"
                className="home-vector0577"
              />
              <img
                src="/playground_assets/vector1511-e7l5.svg"
                alt="Vector1511"
                className="home-vector0578"
              />
              <img
                src="/playground_assets/vector1511-83hu.svg"
                alt="Vector1511"
                className="home-vector0579"
              />
              <img
                src="/playground_assets/vector1511-m46k.svg"
                alt="Vector1511"
                className="home-vector0580"
              />
              <img
                src="/playground_assets/vector1511-yhmn.svg"
                alt="Vector1511"
                className="home-vector0581"
              />
              <img
                src="/playground_assets/vector1511-98ej.svg"
                alt="Vector1511"
                className="home-vector0582"
              />
              <img
                src="/playground_assets/vector1511-depg.svg"
                alt="Vector1511"
                className="home-vector0583"
              />
              <img
                src="/playground_assets/vector1511-2f6.svg"
                alt="Vector1511"
                className="home-vector0584"
              />
              <img
                src="/playground_assets/vector1511-5wap.svg"
                alt="Vector1511"
                className="home-vector0585"
              />
              <img
                src="/playground_assets/vector1511-6xis.svg"
                alt="Vector1511"
                className="home-vector0586"
              />
              <img
                src="/playground_assets/vector1511-x22d.svg"
                alt="Vector1511"
                className="home-vector0587"
              />
              <img
                src="/playground_assets/vector1511-vr6n.svg"
                alt="Vector1511"
                className="home-vector0588"
              />
              <img
                src="/playground_assets/vector1511-3kq.svg"
                alt="Vector1511"
                className="home-vector0589"
              />
              <img
                src="/playground_assets/vector1511-r8sf.svg"
                alt="Vector1511"
                className="home-vector0590"
              />
              <img
                src="/playground_assets/vector1511-vu9ug.svg"
                alt="Vector1511"
                className="home-vector0591"
              />
              <img
                src="/playground_assets/vector1511-xbjn.svg"
                alt="Vector1511"
                className="home-vector0592"
              />
              <img
                src="/playground_assets/vector1511-q4c.svg"
                alt="Vector1511"
                className="home-vector0593"
              />
              <img
                src="/playground_assets/vector1511-idtt.svg"
                alt="Vector1511"
                className="home-vector0594"
              />
              <img
                src="/playground_assets/vector1511-6kuk.svg"
                alt="Vector1511"
                className="home-vector0595"
              />
              <img
                src="/playground_assets/vector1511-g9gm.svg"
                alt="Vector1511"
                className="home-vector0596"
              />
              <img
                src="/playground_assets/vector1511-vmka.svg"
                alt="Vector1511"
                className="home-vector0597"
              />
              <img
                src="/playground_assets/vector1511-nhq8.svg"
                alt="Vector1511"
                className="home-vector0598"
              />
              <img
                src="/playground_assets/vector1511-cvtl.svg"
                alt="Vector1511"
                className="home-vector0599"
              />
              <img
                src="/playground_assets/vector1511-vusx.svg"
                alt="Vector1511"
                className="home-vector0600"
              />
              <img
                src="/playground_assets/vector1511-dzd.svg"
                alt="Vector1511"
                className="home-vector0601"
              />
              <img
                src="/playground_assets/vector1511-vx6n.svg"
                alt="Vector1511"
                className="home-vector0602"
              />
            </div>
            <div className="home-freepikcharacter1inject7">
              <img
                src="/playground_assets/vector1511-yie9.svg"
                alt="Vector1511"
                className="home-vector0603"
              />
              <img
                src="/playground_assets/vector1511-9y8d.svg"
                alt="Vector1511"
                className="home-vector0604"
              />
              <img
                src="/playground_assets/vector1511-v538.svg"
                alt="Vector1511"
                className="home-vector0605"
              />
              <img
                src="/playground_assets/vector1511-jv7.svg"
                alt="Vector1511"
                className="home-vector0606"
              />
              <img
                src="/playground_assets/vector1511-kth8.svg"
                alt="Vector1511"
                className="home-vector0607"
              />
              <img
                src="/playground_assets/vector1511-ufy8.svg"
                alt="Vector1511"
                className="home-vector0608"
              />
              <img
                src="/playground_assets/vector1511-02qc.svg"
                alt="Vector1511"
                className="home-vector0609"
              />
              <img
                src="/playground_assets/vector1511-oa6p.svg"
                alt="Vector1511"
                className="home-vector0610"
              />
              <img
                src="/playground_assets/vector1511-06vo.svg"
                alt="Vector1511"
                className="home-vector0611"
              />
              <img
                src="/playground_assets/vector1511-cfdr.svg"
                alt="Vector1511"
                className="home-vector0612"
              />
              <img
                src="/playground_assets/vector1511-9b9o.svg"
                alt="Vector1511"
                className="home-vector0613"
              />
              <img
                src="/playground_assets/vector1511-oq5.svg"
                alt="Vector1511"
                className="home-vector0614"
              />
              <img
                src="/playground_assets/vector1511-i1mj.svg"
                alt="Vector1511"
                className="home-vector0615"
              />
              <img
                src="/playground_assets/vector1511-zkpt.svg"
                alt="Vector1511"
                className="home-vector0616"
              />
              <img
                src="/playground_assets/vector1511-zjws.svg"
                alt="Vector1511"
                className="home-vector0617"
              />
              <img
                src="/playground_assets/vector1511-aq3f.svg"
                alt="Vector1511"
                className="home-vector0618"
              />
              <img
                src="/playground_assets/vector1511-k3c.svg"
                alt="Vector1511"
                className="home-vector0619"
              />
              <img
                src="/playground_assets/vector1511-ksq.svg"
                alt="Vector1511"
                className="home-vector0620"
              />
              <img
                src="/playground_assets/vector1511-77jt6.svg"
                alt="Vector1511"
                className="home-vector0621"
              />
              <img
                src="/playground_assets/vector1511-aqr9.svg"
                alt="Vector1511"
                className="home-vector0622"
              />
              <img
                src="/playground_assets/vector1511-e9cr.svg"
                alt="Vector1511"
                className="home-vector0623"
              />
              <img
                src="/playground_assets/vector1512-rw5r.svg"
                alt="Vector1512"
                className="home-vector0624"
              />
              <img
                src="/playground_assets/vector1512-dw3s.svg"
                alt="Vector1512"
                className="home-vector0625"
              />
              <img
                src="/playground_assets/vector1512-hamm.svg"
                alt="Vector1512"
                className="home-vector0626"
              />
              <div className="home-group34">
                <img
                  src="/playground_assets/vector1512-bmss.svg"
                  alt="Vector1512"
                  className="home-vector0627"
                />
              </div>
              <img
                src="/playground_assets/vector1512-4za.svg"
                alt="Vector1512"
                className="home-vector0628"
              />
              <img
                src="/playground_assets/vector1512-z0k.svg"
                alt="Vector1512"
                className="home-vector0629"
              />
              <img
                src="/playground_assets/vector1512-1t6w.svg"
                alt="Vector1512"
                className="home-vector0630"
              />
              <img
                src="/playground_assets/vector1512-2tk8.svg"
                alt="Vector1512"
                className="home-vector0631"
              />
              <img
                src="/playground_assets/vector1512-39de.svg"
                alt="Vector1512"
                className="home-vector0632"
              />
              <img
                src="/playground_assets/vector1512-hixs.svg"
                alt="Vector1512"
                className="home-vector0633"
              />
              <img
                src="/playground_assets/vector1512-otvr.svg"
                alt="Vector1512"
                className="home-vector0634"
              />
              <img
                src="/playground_assets/vector1512-rw0i.svg"
                alt="Vector1512"
                className="home-vector0635"
              />
              <img
                src="/playground_assets/vector1512-ttn.svg"
                alt="Vector1512"
                className="home-vector0636"
              />
              <img
                src="/playground_assets/vector1512-mybs.svg"
                alt="Vector1512"
                className="home-vector0637"
              />
              <img
                src="/playground_assets/vector1512-bjdp.svg"
                alt="Vector1512"
                className="home-vector0638"
              />
              <img
                src="/playground_assets/vector1512-ppt.svg"
                alt="Vector1512"
                className="home-vector0639"
              />
              <img
                src="/playground_assets/vector1512-uqqr.svg"
                alt="Vector1512"
                className="home-vector0640"
              />
              <img
                src="/playground_assets/vector1512-v5o9.svg"
                alt="Vector1512"
                className="home-vector0641"
              />
              <img
                src="/playground_assets/vector1512-ai8.svg"
                alt="Vector1512"
                className="home-vector0642"
              />
              <div className="home-group35">
                <img
                  src="/playground_assets/vector1512-5cp.svg"
                  alt="Vector1512"
                  className="home-vector0643"
                />
              </div>
              <img
                src="/playground_assets/vector1512-e1zu.svg"
                alt="Vector1512"
                className="home-vector0644"
              />
              <img
                src="/playground_assets/vector1512-5i3i.svg"
                alt="Vector1512"
                className="home-vector0645"
              />
              <img
                src="/playground_assets/vector1512-7uvh.svg"
                alt="Vector1512"
                className="home-vector0646"
              />
              <img
                src="/playground_assets/vector1512-0hdi.svg"
                alt="Vector1512"
                className="home-vector0647"
              />
              <img
                src="/playground_assets/vector1512-kw2d.svg"
                alt="Vector1512"
                className="home-vector0648"
              />
            </div>
            <div className="home-freepik-linesinject7">
              <img
                src="/playground_assets/vector1512-9lbj.svg"
                alt="Vector1512"
                className="home-vector0649"
              />
              <img
                src="/playground_assets/vector1512-ljw.svg"
                alt="Vector1512"
                className="home-vector0650"
              />
              <img
                src="/playground_assets/vector1512-xii8.svg"
                alt="Vector1512"
                className="home-vector0651"
              />
              <img
                src="/playground_assets/vector1512-w1jr.svg"
                alt="Vector1512"
                className="home-vector0652"
              />
              <img
                src="/playground_assets/vector1512-46qk.svg"
                alt="Vector1512"
                className="home-vector0653"
              />
              <img
                src="/playground_assets/vector1512-77a7.svg"
                alt="Vector1512"
                className="home-vector0654"
              />
              <img
                src="/playground_assets/vector1512-dfhr.svg"
                alt="Vector1512"
                className="home-vector0655"
              />
              <img
                src="/playground_assets/vector1512-t48r.svg"
                alt="Vector1512"
                className="home-vector0656"
              />
              <img
                src="/playground_assets/vector1512-4eyp.svg"
                alt="Vector1512"
                className="home-vector0657"
              />
              <img
                src="/playground_assets/vector1512-x53f.svg"
                alt="Vector1512"
                className="home-vector0658"
              />
              <img
                src="/playground_assets/vector1512-iwgk.svg"
                alt="Vector1512"
                className="home-vector0659"
              />
            </div>
            <div className="home-freepik-plantinject7">
              <img
                src="/playground_assets/vector1512-oehs.svg"
                alt="Vector1512"
                className="home-vector0660"
              />
              <img
                src="/playground_assets/vector1512-vkbq.svg"
                alt="Vector1512"
                className="home-vector0661"
              />
              <img
                src="/playground_assets/vector1512-gr5.svg"
                alt="Vector1512"
                className="home-vector0662"
              />
              <img
                src="/playground_assets/vector1512-5o6p.svg"
                alt="Vector1512"
                className="home-vector0663"
              />
              <img
                src="/playground_assets/vector1512-gbpr.svg"
                alt="Vector1512"
                className="home-vector0664"
              />
              <img
                src="/playground_assets/vector1512-giia.svg"
                alt="Vector1512"
                className="home-vector0665"
              />
            </div>
          </div>
          <div className="home-homescreenpana2">
            <div className="home-freepikbackgroundcompleteinject5">
              <img
                src="/playground_assets/vector1512-gft9.svg"
                alt="Vector1512"
                className="home-vector0666"
              />
              <img
                src="/playground_assets/vector1512-vd4.svg"
                alt="Vector1512"
                className="home-vector0667"
              />
              <img
                src="/playground_assets/vector1512-t91n.svg"
                alt="Vector1512"
                className="home-vector0668"
              />
              <img
                src="/playground_assets/vector1512-2vk.svg"
                alt="Vector1512"
                className="home-vector0669"
              />
              <img
                src="/playground_assets/vector1512-utq.svg"
                alt="Vector1512"
                className="home-vector0670"
              />
              <img
                src="/playground_assets/vector1512-0m9c.svg"
                alt="Vector1512"
                className="home-vector0671"
              />
              <img
                src="/playground_assets/vector1512-xex9.svg"
                alt="Vector1512"
                className="home-vector0672"
              />
              <img
                src="/playground_assets/vector1512-jdi9.svg"
                alt="Vector1512"
                className="home-vector0673"
              />
              <img
                src="/playground_assets/vector1512-4kri.svg"
                alt="Vector1512"
                className="home-vector0674"
              />
              <img
                src="/playground_assets/vector1512-fnrv.svg"
                alt="Vector1512"
                className="home-vector0675"
              />
              <img
                src="/playground_assets/vector1512-w7vu.svg"
                alt="Vector1512"
                className="home-vector0676"
              />
              <img
                src="/playground_assets/vector1512-vva5.svg"
                alt="Vector1512"
                className="home-vector0677"
              />
              <img
                src="/playground_assets/vector1512-qt2.svg"
                alt="Vector1512"
                className="home-vector0678"
              />
              <img
                src="/playground_assets/vector1512-vq4e.svg"
                alt="Vector1512"
                className="home-vector0679"
              />
              <img
                src="/playground_assets/vector1512-9t5.svg"
                alt="Vector1512"
                className="home-vector0680"
              />
              <img
                src="/playground_assets/vector1512-j8ni.svg"
                alt="Vector1512"
                className="home-vector0681"
              />
              <img
                src="/playground_assets/vector1512-p4k5.svg"
                alt="Vector1512"
                className="home-vector0682"
              />
              <img
                src="/playground_assets/vector1512-mvw5.svg"
                alt="Vector1512"
                className="home-vector0683"
              />
              <img
                src="/playground_assets/vector1512-v3nx.svg"
                alt="Vector1512"
                className="home-vector0684"
              />
              <img
                src="/playground_assets/vector1512-hhat.svg"
                alt="Vector1512"
                className="home-vector0685"
              />
              <img
                src="/playground_assets/vector1512-ecv.svg"
                alt="Vector1512"
                className="home-vector0686"
              />
              <img
                src="/playground_assets/vector1512-y5s.svg"
                alt="Vector1512"
                className="home-vector0687"
              />
              <img
                src="/playground_assets/vector1512-u4r8.svg"
                alt="Vector1512"
                className="home-vector0688"
              />
              <img
                src="/playground_assets/vector1512-gcby.svg"
                alt="Vector1512"
                className="home-vector0689"
              />
              <img
                src="/playground_assets/vector1512-b798.svg"
                alt="Vector1512"
                className="home-vector0690"
              />
              <img
                src="/playground_assets/vector1512-hp0p.svg"
                alt="Vector1512"
                className="home-vector0691"
              />
              <img
                src="/playground_assets/vector1512-ovoq.svg"
                alt="Vector1512"
                className="home-vector0692"
              />
              <img
                src="/playground_assets/vector1512-4xma.svg"
                alt="Vector1512"
                className="home-vector0693"
              />
              <img
                src="/playground_assets/vector1512-5b18.svg"
                alt="Vector1512"
                className="home-vector0694"
              />
              <img
                src="/playground_assets/vector1512-6p8r.svg"
                alt="Vector1512"
                className="home-vector0695"
              />
              <img
                src="/playground_assets/vector1512-926b.svg"
                alt="Vector1512"
                className="home-vector0696"
              />
              <img
                src="/playground_assets/vector1512-hq4r.svg"
                alt="Vector1512"
                className="home-vector0697"
              />
              <img
                src="/playground_assets/vector1512-y9t.svg"
                alt="Vector1512"
                className="home-vector0698"
              />
              <img
                src="/playground_assets/vector1512-0p03.svg"
                alt="Vector1512"
                className="home-vector0699"
              />
              <img
                src="/playground_assets/vector1512-l5wm.svg"
                alt="Vector1512"
                className="home-vector0700"
              />
              <img
                src="/playground_assets/vector1512-u3z.svg"
                alt="Vector1512"
                className="home-vector0701"
              />
              <img
                src="/playground_assets/vector1512-fm3m.svg"
                alt="Vector1512"
                className="home-vector0702"
              />
              <img
                src="/playground_assets/vector1512-soht.svg"
                alt="Vector1512"
                className="home-vector0703"
              />
              <img
                src="/playground_assets/vector1512-rz0c.svg"
                alt="Vector1512"
                className="home-vector0704"
              />
              <img
                src="/playground_assets/vector1512-aaxv.svg"
                alt="Vector1512"
                className="home-vector0705"
              />
              <img
                src="/playground_assets/vector1512-gatp.svg"
                alt="Vector1512"
                className="home-vector0706"
              />
              <img
                src="/playground_assets/vector1512-tkw.svg"
                alt="Vector1512"
                className="home-vector0707"
              />
              <img
                src="/playground_assets/vector1512-sux.svg"
                alt="Vector1512"
                className="home-vector0708"
              />
              <img
                src="/playground_assets/vector1512-2vuk.svg"
                alt="Vector1512"
                className="home-vector0709"
              />
              <img
                src="/playground_assets/vector1512-ecyb.svg"
                alt="Vector1512"
                className="home-vector0710"
              />
              <img
                src="/playground_assets/vector1512-346u.svg"
                alt="Vector1512"
                className="home-vector0711"
              />
              <img
                src="/playground_assets/vector1512-vm8.svg"
                alt="Vector1512"
                className="home-vector0712"
              />
              <img
                src="/playground_assets/vector1512-boi.svg"
                alt="Vector1512"
                className="home-vector0713"
              />
              <img
                src="/playground_assets/vector1512-5i4h.svg"
                alt="Vector1512"
                className="home-vector0714"
              />
              <img
                src="/playground_assets/vector1512-fdzl.svg"
                alt="Vector1512"
                className="home-vector0715"
              />
              <img
                src="/playground_assets/vector1512-z7v.svg"
                alt="Vector1512"
                className="home-vector0716"
              />
              <img
                src="/playground_assets/vector1512-v2m9.svg"
                alt="Vector1512"
                className="home-vector0717"
              />
            </div>
            <div className="home-freepik-plantinject5">
              <img
                src="/playground_assets/vector1513-z3il.svg"
                alt="Vector1513"
                className="home-vector0718"
              />
              <img
                src="/playground_assets/vector1513-s3f.svg"
                alt="Vector1513"
                className="home-vector0719"
              />
              <img
                src="/playground_assets/vector1513-cs.svg"
                alt="Vector1513"
                className="home-vector0720"
              />
              <img
                src="/playground_assets/vector1513-warh.svg"
                alt="Vector1513"
                className="home-vector0721"
              />
              <img
                src="/playground_assets/vector1513-p6ed.svg"
                alt="Vector1513"
                className="home-vector0722"
              />
              <img
                src="/playground_assets/vector1513-k8y.svg"
                alt="Vector1513"
                className="home-vector0723"
              />
              <img
                src="/playground_assets/vector1513-4o9c.svg"
                alt="Vector1513"
                className="home-vector0724"
              />
              <img
                src="/playground_assets/vector1513-k6cu.svg"
                alt="Vector1513"
                className="home-vector0725"
              />
              <img
                src="/playground_assets/vector1513-38xi.svg"
                alt="Vector1513"
                className="home-vector0726"
              />
              <img
                src="/playground_assets/vector1513-xjx.svg"
                alt="Vector1513"
                className="home-vector0727"
              />
              <div className="home-group36">
                <img
                  src="/playground_assets/vector1513-9j4.svg"
                  alt="Vector1513"
                  className="home-vector0728"
                />
              </div>
              <div className="home-group37">
                <img
                  src="/playground_assets/vector1513-4xo.svg"
                  alt="Vector1513"
                  className="home-vector0729"
                />
              </div>
              <div className="home-group38">
                <img
                  src="/playground_assets/vector1513-4clg.svg"
                  alt="Vector1513"
                  className="home-vector0730"
                />
              </div>
              <div className="home-group39">
                <img
                  src="/playground_assets/vector1513-nhth.svg"
                  alt="Vector1513"
                  className="home-vector0731"
                />
              </div>
              <div className="home-group40">
                <img
                  src="/playground_assets/vector1513-fy4g.svg"
                  alt="Vector1513"
                  className="home-vector0732"
                />
              </div>
              <div className="home-group41">
                <img
                  src="/playground_assets/vector1513-ikns.svg"
                  alt="Vector1513"
                  className="home-vector0733"
                />
              </div>
              <div className="home-group42">
                <img
                  src="/playground_assets/vector1513-g0t.svg"
                  alt="Vector1513"
                  className="home-vector0734"
                />
              </div>
              <div className="home-group43">
                <img
                  src="/playground_assets/vector1513-l5or.svg"
                  alt="Vector1513"
                  className="home-vector0735"
                />
              </div>
              <div className="home-group44">
                <img
                  src="/playground_assets/vector1513-nka.svg"
                  alt="Vector1513"
                  className="home-vector0736"
                />
              </div>
              <img
                src="/playground_assets/vector1513-h3qi.svg"
                alt="Vector1513"
                className="home-vector0737"
              />
              <img
                src="/playground_assets/vector1513-v6e76.svg"
                alt="Vector1513"
                className="home-vector0738"
              />
              <img
                src="/playground_assets/vector1513-i785.svg"
                alt="Vector1513"
                className="home-vector0739"
              />
              <img
                src="/playground_assets/vector1513-oiqp.svg"
                alt="Vector1513"
                className="home-vector0740"
              />
              <img
                src="/playground_assets/vector1513-in4l.svg"
                alt="Vector1513"
                className="home-vector0741"
              />
              <img
                src="/playground_assets/vector1513-0qe.svg"
                alt="Vector1513"
                className="home-vector0742"
              />
              <img
                src="/playground_assets/vector1513-vr5u.svg"
                alt="Vector1513"
                className="home-vector0743"
              />
              <img
                src="/playground_assets/vector1513-c10n.svg"
                alt="Vector1513"
                className="home-vector0744"
              />
              <img
                src="/playground_assets/vector1513-aoxr.svg"
                alt="Vector1513"
                className="home-vector0745"
              />
              <img
                src="/playground_assets/vector1513-nkfm.svg"
                alt="Vector1513"
                className="home-vector0746"
              />
              <img
                src="/playground_assets/vector1513-xinh.svg"
                alt="Vector1513"
                className="home-vector0747"
              />
              <img
                src="/playground_assets/vector1513-yrzq.svg"
                alt="Vector1513"
                className="home-vector0748"
              />
              <img
                src="/playground_assets/vector1513-ez14.svg"
                alt="Vector1513"
                className="home-vector0749"
              />
            </div>
            <div className="home-freepik-deviceinject5">
              <img
                src="/playground_assets/vector1513-58jc.svg"
                alt="Vector1513"
                className="home-vector0750"
              />
              <img
                src="/playground_assets/vector1513-bxh9.svg"
                alt="Vector1513"
                className="home-vector0751"
              />
              <img
                src="/playground_assets/vector1513-1p8o.svg"
                alt="Vector1513"
                className="home-vector0752"
              />
              <img
                src="/playground_assets/vector1513-2hwn.svg"
                alt="Vector1513"
                className="home-vector0753"
              />
              <img
                src="/playground_assets/vector1513-2ufh.svg"
                alt="Vector1513"
                className="home-vector0754"
              />
              <img
                src="/playground_assets/vector1513-uhnf.svg"
                alt="Vector1513"
                className="home-vector0755"
              />
              <img
                src="/playground_assets/vector1513-3eqg.svg"
                alt="Vector1513"
                className="home-vector0756"
              />
              <img
                src="/playground_assets/vector1513-sb5.svg"
                alt="Vector1513"
                className="home-vector0757"
              />
              <img
                src="/playground_assets/vector1513-pid.svg"
                alt="Vector1513"
                className="home-vector0758"
              />
              <img
                src="/playground_assets/vector1513-53xl.svg"
                alt="Vector1513"
                className="home-vector0759"
              />
              <img
                src="/playground_assets/vector1513-ln4n.svg"
                alt="Vector1513"
                className="home-vector0760"
              />
              <img
                src="/playground_assets/vector1513-c2k.svg"
                alt="Vector1513"
                className="home-vector0761"
              />
              <img
                src="/playground_assets/vector1513-jqsp.svg"
                alt="Vector1513"
                className="home-vector0762"
              />
              <img
                src="/playground_assets/vector1513-20um.svg"
                alt="Vector1513"
                className="home-vector0763"
              />
              <img
                src="/playground_assets/vector1513-c3yk.svg"
                alt="Vector1513"
                className="home-vector0764"
              />
              <img
                src="/playground_assets/vector1513-b9ug.svg"
                alt="Vector1513"
                className="home-vector0765"
              />
              <img
                src="/playground_assets/vector1513-436g.svg"
                alt="Vector1513"
                className="home-vector0766"
              />
              <img
                src="/playground_assets/vector1513-z9fp.svg"
                alt="Vector1513"
                className="home-vector0767"
              />
              <img
                src="/playground_assets/vector1513-gzhf.svg"
                alt="Vector1513"
                className="home-vector0768"
              />
              <img
                src="/playground_assets/vector1513-2bm9c.svg"
                alt="Vector1513"
                className="home-vector0769"
              />
              <img
                src="/playground_assets/vector1513-156w.svg"
                alt="Vector1513"
                className="home-vector0770"
              />
              <img
                src="/playground_assets/vector1513-y9aa.svg"
                alt="Vector1513"
                className="home-vector0771"
              />
              <img
                src="/playground_assets/vector1513-qz1t.svg"
                alt="Vector1513"
                className="home-vector0772"
              />
              <img
                src="/playground_assets/vector1513-kjq.svg"
                alt="Vector1513"
                className="home-vector0773"
              />
              <img
                src="/playground_assets/vector1513-66jq.svg"
                alt="Vector1513"
                className="home-vector0774"
              />
              <img
                src="/playground_assets/vector1513-nv69.svg"
                alt="Vector1513"
                className="home-vector0775"
              />
              <img
                src="/playground_assets/vector1513-8mge.svg"
                alt="Vector1513"
                className="home-vector0776"
              />
              <img
                src="/playground_assets/vector1513-nke.svg"
                alt="Vector1513"
                className="home-vector0777"
              />
              <img
                src="/playground_assets/vector1513-6omg.svg"
                alt="Vector1513"
                className="home-vector0778"
              />
              <img
                src="/playground_assets/vector1513-r054.svg"
                alt="Vector1513"
                className="home-vector0779"
              />
              <img
                src="/playground_assets/vector1513-k7x.svg"
                alt="Vector1513"
                className="home-vector0780"
              />
              <img
                src="/playground_assets/vector1513-ujhp.svg"
                alt="Vector1513"
                className="home-vector0781"
              />
              <img
                src="/playground_assets/vector1513-9u3q.svg"
                alt="Vector1513"
                className="home-vector0782"
              />
              <img
                src="/playground_assets/vector1513-337p.svg"
                alt="Vector1513"
                className="home-vector0783"
              />
              <img
                src="/playground_assets/vector1513-wucn.svg"
                alt="Vector1513"
                className="home-vector0784"
              />
              <img
                src="/playground_assets/vector1513-p7sa.svg"
                alt="Vector1513"
                className="home-vector0785"
              />
              <img
                src="/playground_assets/vector1513-dz8a.svg"
                alt="Vector1513"
                className="home-vector0786"
              />
              <img
                src="/playground_assets/vector1513-wi6c.svg"
                alt="Vector1513"
                className="home-vector0787"
              />
              <img
                src="/playground_assets/vector1513-zqhr.svg"
                alt="Vector1513"
                className="home-vector0788"
              />
              <img
                src="/playground_assets/vector1513-kno.svg"
                alt="Vector1513"
                className="home-vector0789"
              />
              <img
                src="/playground_assets/vector1513-5let.svg"
                alt="Vector1513"
                className="home-vector0790"
              />
              <img
                src="/playground_assets/vector1513-f97c.svg"
                alt="Vector1513"
                className="home-vector0791"
              />
              <img
                src="/playground_assets/vector1513-ofmx.svg"
                alt="Vector1513"
                className="home-vector0792"
              />
              <img
                src="/playground_assets/vector1513-h6gr.svg"
                alt="Vector1513"
                className="home-vector0793"
              />
              <img
                src="/playground_assets/vector1513-9vn.svg"
                alt="Vector1513"
                className="home-vector0794"
              />
              <img
                src="/playground_assets/vector1513-v79l.svg"
                alt="Vector1513"
                className="home-vector0795"
              />
              <img
                src="/playground_assets/vector1513-05e9.svg"
                alt="Vector1513"
                className="home-vector0796"
              />
              <img
                src="/playground_assets/vector1513-ljfh.svg"
                alt="Vector1513"
                className="home-vector0797"
              />
              <img
                src="/playground_assets/vector1513-4cy.svg"
                alt="Vector1513"
                className="home-vector0798"
              />
              <img
                src="/playground_assets/vector1513-4kt.svg"
                alt="Vector1513"
                className="home-vector0799"
              />
              <img
                src="/playground_assets/vector1513-3pv7.svg"
                alt="Vector1513"
                className="home-vector0800"
              />
              <img
                src="/playground_assets/vector1513-17u.svg"
                alt="Vector1513"
                className="home-vector0801"
              />
              <img
                src="/playground_assets/vector1513-wrqj.svg"
                alt="Vector1513"
                className="home-vector0802"
              />
              <img
                src="/playground_assets/vector1513-fcc.svg"
                alt="Vector1513"
                className="home-vector0803"
              />
              <img
                src="/playground_assets/vector1513-zyqf.svg"
                alt="Vector1513"
                className="home-vector0804"
              />
              <img
                src="/playground_assets/vector1513-ekri.svg"
                alt="Vector1513"
                className="home-vector0805"
              />
              <img
                src="/playground_assets/vector1513-ulyo.svg"
                alt="Vector1513"
                className="home-vector0806"
              />
              <img
                src="/playground_assets/vector1514-y836.svg"
                alt="Vector1514"
                className="home-vector0807"
              />
              <img
                src="/playground_assets/vector1514-ijhm.svg"
                alt="Vector1514"
                className="home-vector0808"
              />
              <img
                src="/playground_assets/vector1514-dq6.svg"
                alt="Vector1514"
                className="home-vector0809"
              />
              <img
                src="/playground_assets/vector1514-xcci.svg"
                alt="Vector1514"
                className="home-vector0810"
              />
              <img
                src="/playground_assets/vector1514-vk9h.svg"
                alt="Vector1514"
                className="home-vector0811"
              />
              <img
                src="/playground_assets/vector1514-i0ph.svg"
                alt="Vector1514"
                className="home-vector0812"
              />
              <img
                src="/playground_assets/vector1514-t27.svg"
                alt="Vector1514"
                className="home-vector0813"
              />
              <img
                src="/playground_assets/vector1514-iqk6.svg"
                alt="Vector1514"
                className="home-vector0814"
              />
              <img
                src="/playground_assets/vector1514-uayq.svg"
                alt="Vector1514"
                className="home-vector0815"
              />
              <img
                src="/playground_assets/vector1514-dm6k.svg"
                alt="Vector1514"
                className="home-vector0816"
              />
              <img
                src="/playground_assets/vector1514-tu1j.svg"
                alt="Vector1514"
                className="home-vector0817"
              />
              <img
                src="/playground_assets/vector1514-qri.svg"
                alt="Vector1514"
                className="home-vector0818"
              />
              <img
                src="/playground_assets/vector1514-vx8v.svg"
                alt="Vector1514"
                className="home-vector0819"
              />
              <img
                src="/playground_assets/vector1514-w1zj.svg"
                alt="Vector1514"
                className="home-vector0820"
              />
              <img
                src="/playground_assets/vector1514-n6a.svg"
                alt="Vector1514"
                className="home-vector0821"
              />
              <img
                src="/playground_assets/vector1514-h7ej.svg"
                alt="Vector1514"
                className="home-vector0822"
              />
              <img
                src="/playground_assets/vector1514-s9p5.svg"
                alt="Vector1514"
                className="home-vector0823"
              />
              <img
                src="/playground_assets/vector1514-yfgh.svg"
                alt="Vector1514"
                className="home-vector0824"
              />
              <img
                src="/playground_assets/vector1514-4s8.svg"
                alt="Vector1514"
                className="home-vector0825"
              />
            </div>
            <div className="home-freepik-characterinject5">
              <img
                src="/playground_assets/vector1514-xmq7.svg"
                alt="Vector1514"
                className="home-vector0826"
              />
              <img
                src="/playground_assets/vector1514-tpb.svg"
                alt="Vector1514"
                className="home-vector0827"
              />
              <img
                src="/playground_assets/vector1514-ptko.svg"
                alt="Vector1514"
                className="home-vector0828"
              />
              <img
                src="/playground_assets/vector1514-lqcs.svg"
                alt="Vector1514"
                className="home-vector0829"
              />
              <img
                src="/playground_assets/vector1514-sg4s.svg"
                alt="Vector1514"
                className="home-vector0830"
              />
              <img
                src="/playground_assets/vector1514-bjmc.svg"
                alt="Vector1514"
                className="home-vector0831"
              />
              <img
                src="/playground_assets/vector1514-yqyf.svg"
                alt="Vector1514"
                className="home-vector0832"
              />
              <img
                src="/playground_assets/vector1514-smil.svg"
                alt="Vector1514"
                className="home-vector0833"
              />
              <img
                src="/playground_assets/vector1514-gds.svg"
                alt="Vector1514"
                className="home-vector0834"
              />
              <img
                src="/playground_assets/vector1514-ml9.svg"
                alt="Vector1514"
                className="home-vector0835"
              />
              <img
                src="/playground_assets/vector1514-cuaq.svg"
                alt="Vector1514"
                className="home-vector0836"
              />
              <img
                src="/playground_assets/vector1514-cdlf.svg"
                alt="Vector1514"
                className="home-vector0837"
              />
              <img
                src="/playground_assets/vector1514-ee0s.svg"
                alt="Vector1514"
                className="home-vector0838"
              />
              <img
                src="/playground_assets/vector1514-tlgf.svg"
                alt="Vector1514"
                className="home-vector0839"
              />
              <img
                src="/playground_assets/vector1514-vy7e.svg"
                alt="Vector1514"
                className="home-vector0840"
              />
              <img
                src="/playground_assets/vector1514-1se7.svg"
                alt="Vector1514"
                className="home-vector0841"
              />
              <img
                src="/playground_assets/vector1514-lk6.svg"
                alt="Vector1514"
                className="home-vector0842"
              />
              <img
                src="/playground_assets/vector1514-h0b9.svg"
                alt="Vector1514"
                className="home-vector0843"
              />
              <img
                src="/playground_assets/vector1514-lyus.svg"
                alt="Vector1514"
                className="home-vector0844"
              />
              <img
                src="/playground_assets/vector1514-a6z.svg"
                alt="Vector1514"
                className="home-vector0845"
              />
              <img
                src="/playground_assets/vector1514-uyep.svg"
                alt="Vector1514"
                className="home-vector0846"
              />
              <img
                src="/playground_assets/vector1514-9k8.svg"
                alt="Vector1514"
                className="home-vector0847"
              />
              <img
                src="/playground_assets/vector1514-hurk.svg"
                alt="Vector1514"
                className="home-vector0848"
              />
              <img
                src="/playground_assets/vector1514-86yp.svg"
                alt="Vector1514"
                className="home-vector0849"
              />
              <img
                src="/playground_assets/vector1514-ms.svg"
                alt="Vector1514"
                className="home-vector0850"
              />
              <img
                src="/playground_assets/vector1514-oxog.svg"
                alt="Vector1514"
                className="home-vector0851"
              />
              <img
                src="/playground_assets/vector1514-0ras.svg"
                alt="Vector1514"
                className="home-vector0852"
              />
              <img
                src="/playground_assets/vector1514-51sh.svg"
                alt="Vector1514"
                className="home-vector0853"
              />
              <img
                src="/playground_assets/vector1514-2imk.svg"
                alt="Vector1514"
                className="home-vector0854"
              />
              <img
                src="/playground_assets/vector1514-izjw.svg"
                alt="Vector1514"
                className="home-vector0855"
              />
              <img
                src="/playground_assets/vector1514-3jg3.svg"
                alt="Vector1514"
                className="home-vector0856"
              />
              <img
                src="/playground_assets/vector1514-vvhp.svg"
                alt="Vector1514"
                className="home-vector0857"
              />
              <img
                src="/playground_assets/vector1514-86jx.svg"
                alt="Vector1514"
                className="home-vector0858"
              />
              <img
                src="/playground_assets/vector1514-wyl7.svg"
                alt="Vector1514"
                className="home-vector0859"
              />
              <img
                src="/playground_assets/vector1514-cydg.svg"
                alt="Vector1514"
                className="home-vector0860"
              />
              <img
                src="/playground_assets/vector1514-ro0j.svg"
                alt="Vector1514"
                className="home-vector0861"
              />
              <img
                src="/playground_assets/vector1514-6sxk.svg"
                alt="Vector1514"
                className="home-vector0862"
              />
              <img
                src="/playground_assets/vector1514-u174.svg"
                alt="Vector1514"
                className="home-vector0863"
              />
              <img
                src="/playground_assets/vector1514-tqmk.svg"
                alt="Vector1514"
                className="home-vector0864"
              />
              <img
                src="/playground_assets/vector1514-2h2o.svg"
                alt="Vector1514"
                className="home-vector0865"
              />
              <img
                src="/playground_assets/vector1514-au4.svg"
                alt="Vector1514"
                className="home-vector0866"
              />
              <img
                src="/playground_assets/vector1514-icb.svg"
                alt="Vector1514"
                className="home-vector0867"
              />
              <img
                src="/playground_assets/vector1514-jtgf.svg"
                alt="Vector1514"
                className="home-vector0868"
              />
              <img
                src="/playground_assets/vector1514-8vpt.svg"
                alt="Vector1514"
                className="home-vector0869"
              />
              <img
                src="/playground_assets/vector1514-th6f.svg"
                alt="Vector1514"
                className="home-vector0870"
              />
              <img
                src="/playground_assets/vector1514-6rce.svg"
                alt="Vector1514"
                className="home-vector0871"
              />
              <img
                src="/playground_assets/vector1514-0954.svg"
                alt="Vector1514"
                className="home-vector0872"
              />
              <img
                src="/playground_assets/vector1514-ra6r.svg"
                alt="Vector1514"
                className="home-vector0873"
              />
              <img
                src="/playground_assets/vector1514-ppmk.svg"
                alt="Vector1514"
                className="home-vector0874"
              />
              <img
                src="/playground_assets/vector1514-8n6.svg"
                alt="Vector1514"
                className="home-vector0875"
              />
              <div className="home-group45">
                <img
                  src="/playground_assets/vector1514-hhl.svg"
                  alt="Vector1514"
                  className="home-vector0876"
                />
              </div>
              <div className="home-group46">
                <img
                  src="/playground_assets/vector1514-fd9a.svg"
                  alt="Vector1514"
                  className="home-vector0877"
                />
              </div>
              <img
                src="/playground_assets/vector1514-2jbk.svg"
                alt="Vector1514"
                className="home-vector0878"
              />
              <img
                src="/playground_assets/vector1514-qu4ag.svg"
                alt="Vector1514"
                className="home-vector0879"
              />
              <img
                src="/playground_assets/vector1514-p5bl.svg"
                alt="Vector1514"
                className="home-vector0880"
              />
              <img
                src="/playground_assets/vector1514-172.svg"
                alt="Vector1514"
                className="home-vector0881"
              />
              <img
                src="/playground_assets/vector1514-r4kt.svg"
                alt="Vector1514"
                className="home-vector0882"
              />
              <img
                src="/playground_assets/vector1514-5z9.svg"
                alt="Vector1514"
                className="home-vector0883"
              />
              <img
                src="/playground_assets/vector1514-0dc8.svg"
                alt="Vector1514"
                className="home-vector0884"
              />
              <img
                src="/playground_assets/vector1514-kqpd.svg"
                alt="Vector1514"
                className="home-vector0885"
              />
              <img
                src="/playground_assets/vector1514-bttw.svg"
                alt="Vector1514"
                className="home-vector0886"
              />
              <img
                src="/playground_assets/vector1514-kai.svg"
                alt="Vector1514"
                className="home-vector0887"
              />
              <img
                src="/playground_assets/vector1514-oayr.svg"
                alt="Vector1514"
                className="home-vector0888"
              />
              <img
                src="/playground_assets/vector1514-t4yk.svg"
                alt="Vector1514"
                className="home-vector0889"
              />
              <img
                src="/playground_assets/vector1514-e43b.svg"
                alt="Vector1514"
                className="home-vector0890"
              />
              <img
                src="/playground_assets/vector1514-q9k5.svg"
                alt="Vector1514"
                className="home-vector0891"
              />
              <img
                src="/playground_assets/vector1514-blhh.svg"
                alt="Vector1514"
                className="home-vector0892"
              />
              <img
                src="/playground_assets/vector1514-dnhl.svg"
                alt="Vector1514"
                className="home-vector0893"
              />
              <img
                src="/playground_assets/vector1514-plzo.svg"
                alt="Vector1514"
                className="home-vector0894"
              />
              <img
                src="/playground_assets/vector1514-94a.svg"
                alt="Vector1514"
                className="home-vector0895"
              />
            </div>
            <div className="home-freepik-floorinject5">
              <img
                src="/playground_assets/vector1514-2apc.svg"
                alt="Vector1514"
                className="home-vector0896"
              />
            </div>
          </div>
          <div className="home-homescreenpana3">
            <div className="home-freepikbackgroundcompleteinject51">
              <img
                src="/playground_assets/vector1514-41l.svg"
                alt="Vector1514"
                className="home-vector0897"
              />
              <img
                src="/playground_assets/vector1514-072.svg"
                alt="Vector1514"
                className="home-vector0898"
              />
              <img
                src="/playground_assets/vector1514-ez8i.svg"
                alt="Vector1514"
                className="home-vector0899"
              />
              <img
                src="/playground_assets/vector1514-18nv.svg"
                alt="Vector1514"
                className="home-vector0900"
              />
              <img
                src="/playground_assets/vector1515-xvoo.svg"
                alt="Vector1515"
                className="home-vector0901"
              />
              <img
                src="/playground_assets/vector1515-2f0k.svg"
                alt="Vector1515"
                className="home-vector0902"
              />
              <img
                src="/playground_assets/vector1515-butk.svg"
                alt="Vector1515"
                className="home-vector0903"
              />
              <img
                src="/playground_assets/vector1515-x2nq.svg"
                alt="Vector1515"
                className="home-vector0904"
              />
              <img
                src="/playground_assets/vector1515-o4.svg"
                alt="Vector1515"
                className="home-vector0905"
              />
              <img
                src="/playground_assets/vector1515-7fn.svg"
                alt="Vector1515"
                className="home-vector0906"
              />
              <img
                src="/playground_assets/vector1515-epyc.svg"
                alt="Vector1515"
                className="home-vector0907"
              />
              <img
                src="/playground_assets/vector1515-kko.svg"
                alt="Vector1515"
                className="home-vector0908"
              />
              <img
                src="/playground_assets/vector1515-cdyt.svg"
                alt="Vector1515"
                className="home-vector0909"
              />
              <img
                src="/playground_assets/vector1515-7pr.svg"
                alt="Vector1515"
                className="home-vector0910"
              />
              <img
                src="/playground_assets/vector1515-43hf.svg"
                alt="Vector1515"
                className="home-vector0911"
              />
              <img
                src="/playground_assets/vector1515-dyjl.svg"
                alt="Vector1515"
                className="home-vector0912"
              />
              <img
                src="/playground_assets/vector1515-xse.svg"
                alt="Vector1515"
                className="home-vector0913"
              />
              <img
                src="/playground_assets/vector1515-p3g.svg"
                alt="Vector1515"
                className="home-vector0914"
              />
              <img
                src="/playground_assets/vector1515-775.svg"
                alt="Vector1515"
                className="home-vector0915"
              />
              <img
                src="/playground_assets/vector1515-9jcd.svg"
                alt="Vector1515"
                className="home-vector0916"
              />
              <img
                src="/playground_assets/vector1515-o0bm.svg"
                alt="Vector1515"
                className="home-vector0917"
              />
              <img
                src="/playground_assets/vector1515-myg4.svg"
                alt="Vector1515"
                className="home-vector0918"
              />
              <img
                src="/playground_assets/vector1515-r5qa.svg"
                alt="Vector1515"
                className="home-vector0919"
              />
              <img
                src="/playground_assets/vector1515-8ig.svg"
                alt="Vector1515"
                className="home-vector0920"
              />
              <img
                src="/playground_assets/vector1515-469n.svg"
                alt="Vector1515"
                className="home-vector0921"
              />
              <img
                src="/playground_assets/vector1515-f0d6.svg"
                alt="Vector1515"
                className="home-vector0922"
              />
              <img
                src="/playground_assets/vector1515-c4h5.svg"
                alt="Vector1515"
                className="home-vector0923"
              />
              <img
                src="/playground_assets/vector1515-lqy4.svg"
                alt="Vector1515"
                className="home-vector0924"
              />
              <img
                src="/playground_assets/vector1515-r16j.svg"
                alt="Vector1515"
                className="home-vector0925"
              />
              <img
                src="/playground_assets/vector1515-4qe7.svg"
                alt="Vector1515"
                className="home-vector0926"
              />
              <img
                src="/playground_assets/vector1515-mxt.svg"
                alt="Vector1515"
                className="home-vector0927"
              />
              <img
                src="/playground_assets/vector1515-g1r.svg"
                alt="Vector1515"
                className="home-vector0928"
              />
              <img
                src="/playground_assets/vector1515-w2lh.svg"
                alt="Vector1515"
                className="home-vector0929"
              />
              <img
                src="/playground_assets/vector1515-shk.svg"
                alt="Vector1515"
                className="home-vector0930"
              />
              <img
                src="/playground_assets/vector1515-57ia.svg"
                alt="Vector1515"
                className="home-vector0931"
              />
              <img
                src="/playground_assets/vector1515-f3ag.svg"
                alt="Vector1515"
                className="home-vector0932"
              />
              <img
                src="/playground_assets/vector1515-pj5d.svg"
                alt="Vector1515"
                className="home-vector0933"
              />
              <img
                src="/playground_assets/vector1515-1155.svg"
                alt="Vector1515"
                className="home-vector0934"
              />
              <img
                src="/playground_assets/vector1515-89p.svg"
                alt="Vector1515"
                className="home-vector0935"
              />
              <img
                src="/playground_assets/vector1515-4y18.svg"
                alt="Vector1515"
                className="home-vector0936"
              />
              <img
                src="/playground_assets/vector1515-41gr.svg"
                alt="Vector1515"
                className="home-vector0937"
              />
              <img
                src="/playground_assets/vector1515-dabq.svg"
                alt="Vector1515"
                className="home-vector0938"
              />
              <img
                src="/playground_assets/vector1515-cghg.svg"
                alt="Vector1515"
                className="home-vector0939"
              />
              <img
                src="/playground_assets/vector1515-fmmg.svg"
                alt="Vector1515"
                className="home-vector0940"
              />
              <img
                src="/playground_assets/vector1515-ve7v.svg"
                alt="Vector1515"
                className="home-vector0941"
              />
              <img
                src="/playground_assets/vector1515-24n7.svg"
                alt="Vector1515"
                className="home-vector0942"
              />
              <img
                src="/playground_assets/vector1515-amsl.svg"
                alt="Vector1515"
                className="home-vector0943"
              />
              <img
                src="/playground_assets/vector1515-66n.svg"
                alt="Vector1515"
                className="home-vector0944"
              />
              <img
                src="/playground_assets/vector1515-2dyv.svg"
                alt="Vector1515"
                className="home-vector0945"
              />
              <img
                src="/playground_assets/vector1515-fjr.svg"
                alt="Vector1515"
                className="home-vector0946"
              />
              <img
                src="/playground_assets/vector1515-fcf.svg"
                alt="Vector1515"
                className="home-vector0947"
              />
              <img
                src="/playground_assets/vector1515-d3el.svg"
                alt="Vector1515"
                className="home-vector0948"
              />
            </div>
            <div className="home-freepik-plantinject51">
              <img
                src="/playground_assets/vector1515-u6co.svg"
                alt="Vector1515"
                className="home-vector0949"
              />
              <img
                src="/playground_assets/vector1515-x1i.svg"
                alt="Vector1515"
                className="home-vector0950"
              />
              <img
                src="/playground_assets/vector1515-m4i.svg"
                alt="Vector1515"
                className="home-vector0951"
              />
              <img
                src="/playground_assets/vector1515-91ro.svg"
                alt="Vector1515"
                className="home-vector0952"
              />
              <img
                src="/playground_assets/vector1515-bj2q.svg"
                alt="Vector1515"
                className="home-vector0953"
              />
              <img
                src="/playground_assets/vector1515-h2ir.svg"
                alt="Vector1515"
                className="home-vector0954"
              />
              <img
                src="/playground_assets/vector1515-2izu.svg"
                alt="Vector1515"
                className="home-vector0955"
              />
              <img
                src="/playground_assets/vector1515-b8k.svg"
                alt="Vector1515"
                className="home-vector0956"
              />
              <img
                src="/playground_assets/vector1515-ohwu.svg"
                alt="Vector1515"
                className="home-vector0957"
              />
              <img
                src="/playground_assets/vector1515-izbu.svg"
                alt="Vector1515"
                className="home-vector0958"
              />
              <div className="home-group47">
                <img
                  src="/playground_assets/vector1515-qvel.svg"
                  alt="Vector1515"
                  className="home-vector0959"
                />
              </div>
              <div className="home-group48">
                <img
                  src="/playground_assets/vector1515-3of.svg"
                  alt="Vector1515"
                  className="home-vector0960"
                />
              </div>
              <div className="home-group49">
                <img
                  src="/playground_assets/vector1515-kgrt.svg"
                  alt="Vector1515"
                  className="home-vector0961"
                />
              </div>
              <div className="home-group50">
                <img
                  src="/playground_assets/vector1515-azr.svg"
                  alt="Vector1515"
                  className="home-vector0962"
                />
              </div>
              <div className="home-group51">
                <img
                  src="/playground_assets/vector1515-8n1m.svg"
                  alt="Vector1515"
                  className="home-vector0963"
                />
              </div>
              <div className="home-group52">
                <img
                  src="/playground_assets/vector1515-bizn.svg"
                  alt="Vector1515"
                  className="home-vector0964"
                />
              </div>
              <div className="home-group53">
                <img
                  src="/playground_assets/vector1515-07cs.svg"
                  alt="Vector1515"
                  className="home-vector0965"
                />
              </div>
              <div className="home-group54">
                <img
                  src="/playground_assets/vector1515-cwg.svg"
                  alt="Vector1515"
                  className="home-vector0966"
                />
              </div>
              <div className="home-group55">
                <img
                  src="/playground_assets/vector1515-6hem.svg"
                  alt="Vector1515"
                  className="home-vector0967"
                />
              </div>
              <img
                src="/playground_assets/vector1515-rn1.svg"
                alt="Vector1515"
                className="home-vector0968"
              />
              <img
                src="/playground_assets/vector1515-g2dn.svg"
                alt="Vector1515"
                className="home-vector0969"
              />
              <img
                src="/playground_assets/vector1515-b71r.svg"
                alt="Vector1515"
                className="home-vector0970"
              />
              <img
                src="/playground_assets/vector1515-s5k.svg"
                alt="Vector1515"
                className="home-vector0971"
              />
              <img
                src="/playground_assets/vector1515-nta2.svg"
                alt="Vector1515"
                className="home-vector0972"
              />
              <img
                src="/playground_assets/vector1515-r1zn.svg"
                alt="Vector1515"
                className="home-vector0973"
              />
              <img
                src="/playground_assets/vector1515-yh8.svg"
                alt="Vector1515"
                className="home-vector0974"
              />
              <img
                src="/playground_assets/vector1515-xox9.svg"
                alt="Vector1515"
                className="home-vector0975"
              />
              <img
                src="/playground_assets/vector1515-y07.svg"
                alt="Vector1515"
                className="home-vector0976"
              />
              <img
                src="/playground_assets/vector1515-jr.svg"
                alt="Vector1515"
                className="home-vector0977"
              />
              <img
                src="/playground_assets/vector1515-25qi.svg"
                alt="Vector1515"
                className="home-vector0978"
              />
              <img
                src="/playground_assets/vector1515-4ok6.svg"
                alt="Vector1515"
                className="home-vector0979"
              />
              <img
                src="/playground_assets/vector1515-pjws.svg"
                alt="Vector1515"
                className="home-vector0980"
              />
            </div>
            <div className="home-freepik-deviceinject51">
              <img
                src="/playground_assets/vector1515-c52l.svg"
                alt="Vector1515"
                className="home-vector0981"
              />
              <img
                src="/playground_assets/vector1515-efl9.svg"
                alt="Vector1515"
                className="home-vector0982"
              />
              <img
                src="/playground_assets/vector1515-ufi.svg"
                alt="Vector1515"
                className="home-vector0983"
              />
              <img
                src="/playground_assets/vector1515-jgt.svg"
                alt="Vector1515"
                className="home-vector0984"
              />
              <img
                src="/playground_assets/vector1515-ptdj.svg"
                alt="Vector1515"
                className="home-vector0985"
              />
              <img
                src="/playground_assets/vector1515-iyyr.svg"
                alt="Vector1515"
                className="home-vector0986"
              />
              <img
                src="/playground_assets/vector1515-d2p1.svg"
                alt="Vector1515"
                className="home-vector0987"
              />
              <img
                src="/playground_assets/vector1515-mfwm.svg"
                alt="Vector1515"
                className="home-vector0988"
              />
              <img
                src="/playground_assets/vector1515-ie7nb.svg"
                alt="Vector1515"
                className="home-vector0989"
              />
              <img
                src="/playground_assets/vector1516-39te.svg"
                alt="Vector1516"
                className="home-vector0990"
              />
              <img
                src="/playground_assets/vector1516-c6xe.svg"
                alt="Vector1516"
                className="home-vector0991"
              />
              <img
                src="/playground_assets/vector1516-ko6m.svg"
                alt="Vector1516"
                className="home-vector0992"
              />
              <img
                src="/playground_assets/vector1516-5wcg.svg"
                alt="Vector1516"
                className="home-vector0993"
              />
              <img
                src="/playground_assets/vector1516-rynpm.svg"
                alt="Vector1516"
                className="home-vector0994"
              />
              <img
                src="/playground_assets/vector1516-gggu.svg"
                alt="Vector1516"
                className="home-vector0995"
              />
              <img
                src="/playground_assets/vector1516-bsg9.svg"
                alt="Vector1516"
                className="home-vector0996"
              />
              <img
                src="/playground_assets/vector1516-6nit.svg"
                alt="Vector1516"
                className="home-vector0997"
              />
              <img
                src="/playground_assets/vector1516-yws8.svg"
                alt="Vector1516"
                className="home-vector0998"
              />
              <img
                src="/playground_assets/vector1516-xgbl.svg"
                alt="Vector1516"
                className="home-vector0999"
              />
              <img
                src="/playground_assets/vector1516-8kb.svg"
                alt="Vector1516"
                className="home-vector1000"
              />
              <img
                src="/playground_assets/vector1516-7gor.svg"
                alt="Vector1516"
                className="home-vector1001"
              />
              <img
                src="/playground_assets/vector1516-gjtq.svg"
                alt="Vector1516"
                className="home-vector1002"
              />
              <img
                src="/playground_assets/vector1516-x1oo.svg"
                alt="Vector1516"
                className="home-vector1003"
              />
              <img
                src="/playground_assets/vector1516-cbzr.svg"
                alt="Vector1516"
                className="home-vector1004"
              />
              <img
                src="/playground_assets/vector1516-09tj.svg"
                alt="Vector1516"
                className="home-vector1005"
              />
              <img
                src="/playground_assets/vector1516-znt.svg"
                alt="Vector1516"
                className="home-vector1006"
              />
              <img
                src="/playground_assets/vector1516-9ydl.svg"
                alt="Vector1516"
                className="home-vector1007"
              />
              <img
                src="/playground_assets/vector1516-to7d.svg"
                alt="Vector1516"
                className="home-vector1008"
              />
              <img
                src="/playground_assets/vector1516-eu5j.svg"
                alt="Vector1516"
                className="home-vector1009"
              />
              <img
                src="/playground_assets/vector1516-r49a.svg"
                alt="Vector1516"
                className="home-vector1010"
              />
              <img
                src="/playground_assets/vector1516-uso.svg"
                alt="Vector1516"
                className="home-vector1011"
              />
              <img
                src="/playground_assets/vector1516-rtf.svg"
                alt="Vector1516"
                className="home-vector1012"
              />
              <img
                src="/playground_assets/vector1516-wz3.svg"
                alt="Vector1516"
                className="home-vector1013"
              />
              <img
                src="/playground_assets/vector1516-ncfo.svg"
                alt="Vector1516"
                className="home-vector1014"
              />
              <img
                src="/playground_assets/vector1516-afz7.svg"
                alt="Vector1516"
                className="home-vector1015"
              />
              <img
                src="/playground_assets/vector1516-ml5.svg"
                alt="Vector1516"
                className="home-vector1016"
              />
              <img
                src="/playground_assets/vector1516-lnt9.svg"
                alt="Vector1516"
                className="home-vector1017"
              />
              <img
                src="/playground_assets/vector1516-1yt2.svg"
                alt="Vector1516"
                className="home-vector1018"
              />
              <img
                src="/playground_assets/vector1516-ut9l.svg"
                alt="Vector1516"
                className="home-vector1019"
              />
              <img
                src="/playground_assets/vector1516-32zr.svg"
                alt="Vector1516"
                className="home-vector1020"
              />
              <img
                src="/playground_assets/vector1516-acpk.svg"
                alt="Vector1516"
                className="home-vector1021"
              />
              <img
                src="/playground_assets/vector1516-g78q.svg"
                alt="Vector1516"
                className="home-vector1022"
              />
              <img
                src="/playground_assets/vector1516-t3g4.svg"
                alt="Vector1516"
                className="home-vector1023"
              />
              <img
                src="/playground_assets/vector1516-5atv.svg"
                alt="Vector1516"
                className="home-vector1024"
              />
              <img
                src="/playground_assets/vector1516-xrt6.svg"
                alt="Vector1516"
                className="home-vector1025"
              />
              <img
                src="/playground_assets/vector1516-l8s.svg"
                alt="Vector1516"
                className="home-vector1026"
              />
              <img
                src="/playground_assets/vector1516-m0if.svg"
                alt="Vector1516"
                className="home-vector1027"
              />
              <img
                src="/playground_assets/vector1516-eywb.svg"
                alt="Vector1516"
                className="home-vector1028"
              />
              <img
                src="/playground_assets/vector1516-3ev.svg"
                alt="Vector1516"
                className="home-vector1029"
              />
              <img
                src="/playground_assets/vector1516-t4jj.svg"
                alt="Vector1516"
                className="home-vector1030"
              />
              <img
                src="/playground_assets/vector1516-01k.svg"
                alt="Vector1516"
                className="home-vector1031"
              />
              <img
                src="/playground_assets/vector1516-ha0o.svg"
                alt="Vector1516"
                className="home-vector1032"
              />
              <img
                src="/playground_assets/vector1516-qra.svg"
                alt="Vector1516"
                className="home-vector1033"
              />
              <img
                src="/playground_assets/vector1516-zoja.svg"
                alt="Vector1516"
                className="home-vector1034"
              />
              <img
                src="/playground_assets/vector1516-plvd.svg"
                alt="Vector1516"
                className="home-vector1035"
              />
              <img
                src="/playground_assets/vector1516-z0hk.svg"
                alt="Vector1516"
                className="home-vector1036"
              />
              <img
                src="/playground_assets/vector1516-4n0g.svg"
                alt="Vector1516"
                className="home-vector1037"
              />
              <img
                src="/playground_assets/vector1516-1496.svg"
                alt="Vector1516"
                className="home-vector1038"
              />
              <img
                src="/playground_assets/vector1516-2qx.svg"
                alt="Vector1516"
                className="home-vector1039"
              />
              <img
                src="/playground_assets/vector1516-65sd.svg"
                alt="Vector1516"
                className="home-vector1040"
              />
              <img
                src="/playground_assets/vector1516-fw9.svg"
                alt="Vector1516"
                className="home-vector1041"
              />
              <img
                src="/playground_assets/vector1516-zik.svg"
                alt="Vector1516"
                className="home-vector1042"
              />
              <img
                src="/playground_assets/vector1516-nmvn.svg"
                alt="Vector1516"
                className="home-vector1043"
              />
              <img
                src="/playground_assets/vector1516-rl5m.svg"
                alt="Vector1516"
                className="home-vector1044"
              />
              <img
                src="/playground_assets/vector1516-2vn.svg"
                alt="Vector1516"
                className="home-vector1045"
              />
              <img
                src="/playground_assets/vector1516-ftru.svg"
                alt="Vector1516"
                className="home-vector1046"
              />
              <img
                src="/playground_assets/vector1516-iz4q.svg"
                alt="Vector1516"
                className="home-vector1047"
              />
              <img
                src="/playground_assets/vector1516-pyfl.svg"
                alt="Vector1516"
                className="home-vector1048"
              />
              <img
                src="/playground_assets/vector1516-sssk.svg"
                alt="Vector1516"
                className="home-vector1049"
              />
              <img
                src="/playground_assets/vector1516-bflj.svg"
                alt="Vector1516"
                className="home-vector1050"
              />
              <img
                src="/playground_assets/vector1516-zsbq.svg"
                alt="Vector1516"
                className="home-vector1051"
              />
              <img
                src="/playground_assets/vector1516-jw4l.svg"
                alt="Vector1516"
                className="home-vector1052"
              />
              <img
                src="/playground_assets/vector1516-6qsh.svg"
                alt="Vector1516"
                className="home-vector1053"
              />
              <img
                src="/playground_assets/vector1516-ezx.svg"
                alt="Vector1516"
                className="home-vector1054"
              />
              <img
                src="/playground_assets/vector1516-94sa.svg"
                alt="Vector1516"
                className="home-vector1055"
              />
              <img
                src="/playground_assets/vector1516-uj7n.svg"
                alt="Vector1516"
                className="home-vector1056"
              />
            </div>
            <div className="home-freepik-characterinject51">
              <img
                src="/playground_assets/vector1516-v3i.svg"
                alt="Vector1516"
                className="home-vector1057"
              />
              <img
                src="/playground_assets/vector1516-5od.svg"
                alt="Vector1516"
                className="home-vector1058"
              />
              <img
                src="/playground_assets/vector1516-spbg.svg"
                alt="Vector1516"
                className="home-vector1059"
              />
              <img
                src="/playground_assets/vector1516-n26.svg"
                alt="Vector1516"
                className="home-vector1060"
              />
              <img
                src="/playground_assets/vector1516-jdv.svg"
                alt="Vector1516"
                className="home-vector1061"
              />
              <img
                src="/playground_assets/vector1516-gvb.svg"
                alt="Vector1516"
                className="home-vector1062"
              />
              <img
                src="/playground_assets/vector1516-j2r.svg"
                alt="Vector1516"
                className="home-vector1063"
              />
              <img
                src="/playground_assets/vector1516-bvm.svg"
                alt="Vector1516"
                className="home-vector1064"
              />
              <img
                src="/playground_assets/vector1516-t7eu.svg"
                alt="Vector1516"
                className="home-vector1065"
              />
              <img
                src="/playground_assets/vector1516-3cnq.svg"
                alt="Vector1516"
                className="home-vector1066"
              />
              <img
                src="/playground_assets/vector1516-2qoi.svg"
                alt="Vector1516"
                className="home-vector1067"
              />
              <img
                src="/playground_assets/vector1516-mc44.svg"
                alt="Vector1516"
                className="home-vector1068"
              />
              <img
                src="/playground_assets/vector1516-cyn3.svg"
                alt="Vector1516"
                className="home-vector1069"
              />
              <img
                src="/playground_assets/vector1516-uhjq.svg"
                alt="Vector1516"
                className="home-vector1070"
              />
              <img
                src="/playground_assets/vector1516-15v4.svg"
                alt="Vector1516"
                className="home-vector1071"
              />
              <img
                src="/playground_assets/vector1516-esh6.svg"
                alt="Vector1516"
                className="home-vector1072"
              />
              <img
                src="/playground_assets/vector1516-ati.svg"
                alt="Vector1516"
                className="home-vector1073"
              />
              <img
                src="/playground_assets/vector1516-rvz.svg"
                alt="Vector1516"
                className="home-vector1074"
              />
              <img
                src="/playground_assets/vector1516-nxpl.svg"
                alt="Vector1516"
                className="home-vector1075"
              />
              <img
                src="/playground_assets/vector1516-zypk.svg"
                alt="Vector1516"
                className="home-vector1076"
              />
              <img
                src="/playground_assets/vector1516-d9uj.svg"
                alt="Vector1516"
                className="home-vector1077"
              />
              <img
                src="/playground_assets/vector1516-3y4p.svg"
                alt="Vector1516"
                className="home-vector1078"
              />
              <img
                src="/playground_assets/vector1516-okue.svg"
                alt="Vector1516"
                className="home-vector1079"
              />
              <img
                src="/playground_assets/vector1516-41ro.svg"
                alt="Vector1516"
                className="home-vector1080"
              />
              <img
                src="/playground_assets/vector1516-uj6q.svg"
                alt="Vector1516"
                className="home-vector1081"
              />
              <img
                src="/playground_assets/vector1516-9ss4.svg"
                alt="Vector1516"
                className="home-vector1082"
              />
              <img
                src="/playground_assets/vector1516-pdig.svg"
                alt="Vector1516"
                className="home-vector1083"
              />
              <img
                src="/playground_assets/vector1516-rem.svg"
                alt="Vector1516"
                className="home-vector1084"
              />
              <img
                src="/playground_assets/vector1516-xxw.svg"
                alt="Vector1516"
                className="home-vector1085"
              />
              <img
                src="/playground_assets/vector1516-dkf.svg"
                alt="Vector1516"
                className="home-vector1086"
              />
              <img
                src="/playground_assets/vector1516-v6vs.svg"
                alt="Vector1516"
                className="home-vector1087"
              />
              <img
                src="/playground_assets/vector1516-7i5h.svg"
                alt="Vector1516"
                className="home-vector1088"
              />
              <img
                src="/playground_assets/vector1517-vxr7i.svg"
                alt="Vector1517"
                className="home-vector1089"
              />
              <img
                src="/playground_assets/vector1517-2wj.svg"
                alt="Vector1517"
                className="home-vector1090"
              />
              <img
                src="/playground_assets/vector1517-ar.svg"
                alt="Vector1517"
                className="home-vector1091"
              />
              <img
                src="/playground_assets/vector1517-8s07.svg"
                alt="Vector1517"
                className="home-vector1092"
              />
              <img
                src="/playground_assets/vector1517-0meh.svg"
                alt="Vector1517"
                className="home-vector1093"
              />
              <img
                src="/playground_assets/vector1517-jvv.svg"
                alt="Vector1517"
                className="home-vector1094"
              />
              <img
                src="/playground_assets/vector1517-ggvi.svg"
                alt="Vector1517"
                className="home-vector1095"
              />
              <img
                src="/playground_assets/vector1517-q04.svg"
                alt="Vector1517"
                className="home-vector1096"
              />
              <img
                src="/playground_assets/vector1517-oc9e.svg"
                alt="Vector1517"
                className="home-vector1097"
              />
              <img
                src="/playground_assets/vector1517-gr7i.svg"
                alt="Vector1517"
                className="home-vector1098"
              />
              <img
                src="/playground_assets/vector1517-ea4k.svg"
                alt="Vector1517"
                className="home-vector1099"
              />
              <img
                src="/playground_assets/vector1517-0168.svg"
                alt="Vector1517"
                className="home-vector1100"
              />
              <img
                src="/playground_assets/vector1517-p1om.svg"
                alt="Vector1517"
                className="home-vector1101"
              />
              <img
                src="/playground_assets/vector1517-67u.svg"
                alt="Vector1517"
                className="home-vector1102"
              />
              <img
                src="/playground_assets/vector1517-amaf.svg"
                alt="Vector1517"
                className="home-vector1103"
              />
              <img
                src="/playground_assets/vector1517-4iu8.svg"
                alt="Vector1517"
                className="home-vector1104"
              />
              <img
                src="/playground_assets/vector1517-n6n.svg"
                alt="Vector1517"
                className="home-vector1105"
              />
              <img
                src="/playground_assets/vector1517-o7m.svg"
                alt="Vector1517"
                className="home-vector1106"
              />
              <div className="home-group56">
                <img
                  src="/playground_assets/vector1517-qc7r.svg"
                  alt="Vector1517"
                  className="home-vector1107"
                />
              </div>
              <div className="home-group57">
                <img
                  src="/playground_assets/vector1517-kw4n.svg"
                  alt="Vector1517"
                  className="home-vector1108"
                />
              </div>
              <img
                src="/playground_assets/vector1517-x389.svg"
                alt="Vector1517"
                className="home-vector1109"
              />
              <img
                src="/playground_assets/vector1517-ylk.svg"
                alt="Vector1517"
                className="home-vector1110"
              />
              <img
                src="/playground_assets/vector1517-teve.svg"
                alt="Vector1517"
                className="home-vector1111"
              />
              <img
                src="/playground_assets/vector1517-7xo.svg"
                alt="Vector1517"
                className="home-vector1112"
              />
              <img
                src="/playground_assets/vector1517-y0xa.svg"
                alt="Vector1517"
                className="home-vector1113"
              />
              <img
                src="/playground_assets/vector1517-hchp.svg"
                alt="Vector1517"
                className="home-vector1114"
              />
              <img
                src="/playground_assets/vector1517-j4ta.svg"
                alt="Vector1517"
                className="home-vector1115"
              />
              <img
                src="/playground_assets/vector1517-guxb.svg"
                alt="Vector1517"
                className="home-vector1116"
              />
              <img
                src="/playground_assets/vector1517-dom6.svg"
                alt="Vector1517"
                className="home-vector1117"
              />
              <img
                src="/playground_assets/vector1517-mn19.svg"
                alt="Vector1517"
                className="home-vector1118"
              />
              <img
                src="/playground_assets/vector1517-o3h.svg"
                alt="Vector1517"
                className="home-vector1119"
              />
              <img
                src="/playground_assets/vector1517-dkq.svg"
                alt="Vector1517"
                className="home-vector1120"
              />
              <img
                src="/playground_assets/vector1517-lc4k.svg"
                alt="Vector1517"
                className="home-vector1121"
              />
              <img
                src="/playground_assets/vector1517-o3zj.svg"
                alt="Vector1517"
                className="home-vector1122"
              />
              <img
                src="/playground_assets/vector1517-6ph.svg"
                alt="Vector1517"
                className="home-vector1123"
              />
              <img
                src="/playground_assets/vector1517-o5t9.svg"
                alt="Vector1517"
                className="home-vector1124"
              />
              <img
                src="/playground_assets/vector1517-a0ou.svg"
                alt="Vector1517"
                className="home-vector1125"
              />
              <img
                src="/playground_assets/vector1517-ipvh.svg"
                alt="Vector1517"
                className="home-vector1126"
              />
            </div>
            <div className="home-freepik-floorinject51">
              <img
                src="/playground_assets/vector1517-2g1i.svg"
                alt="Vector1517"
                className="home-vector1127"
              />
            </div>
          </div>
          <div className="home-h2tg695h5">
            <div className="home-frame5">
              <div className="home-group58"></div>
            </div>
          </div>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/5fde51e0-8db5-4c04-94c6-a16becb762c0?org_if_sml=14844"
            alt="Rectangle100501517"
            className="home-rectangle10050"
          />
          <div className="home-div1wsqynx">
            <div className="home-divar9stc">
              <div className="home-div1fx0lfx">
                <span className="home-text167">
                  <span>© 2023 Lorem, Inc.</span>
                </span>
                <span className="home-text169">·</span>
                <span className="home-text170">
                  <span>Terms</span>
                </span>
                <span className="home-text172">·</span>
                <span className="home-text173">
                  <span>Sitemap</span>
                </span>
                <span className="home-text175">·</span>
                <span className="home-text176">
                  <span>Privacy</span>
                </span>
                <span className="home-text178">·</span>
                <span className="home-text179">
                  <span>Your Privacy Choices</span>
                </span>
              </div>
              <div className="home-divjro6t0">
                <div className="home-divjro6t01">
                  <button className="home-button1az8yk66">
                    <Image
                      src="/playground_assets/svg1517-2c9.svg"
                      alt="svg1517"
                      className="home-svg"
                      width={16}
                      height={16}
                    />
                    <span className="home-text181">
                      <span>English (US)</span>
                    </span>
                  </button>
                  <button className="home-button1az8yk661">
                    <span className="home-text183">$</span>
                    <span className="home-text184">
                      <span>USD</span>
                    </span>
                  </button>
                </div>
                <div className="home-ul115qwnm">
                  <div className="home-navigateto-facebook">
                    <div className="home-frame6"></div>
                  </div>
                  <div className="home-navigateto-twitter">
                    <div className="home-frame7"></div>
                  </div>
                  <div className="home-navigateto-instagram">
                    <div className="home-frame8"></div>
                  </div>
                </div>
              </div>
            </div>
            <span className="home-text186">
              <span>
                Lorem ipsum dolor sit amet consectetur. Quam at ligula ante id
                nulla viverra. Morbi in elit nam et consequat malesuada enim.
                Varius amet eget in orci lectus faucibus ullamcorper. Mi aenean
                et blandit vivamus magna tristique etiam vitae. Et enim cras
                urna aliquam pulvinar cras sollicitudin ut. Vel diam ornare leo
                fames.
              </span>
            </span>
          </div>
          <img
            src="/playground_assets/line11517-wx6.svg"
            alt="Line11517"
            className="home-line1"
          />
          <img
            src="/playground_assets/line21517-rjik.svg"
            alt="Line21517"
            className="home-line2"
          />
          <div className="home-section1l3ys1i">
            <span className="home-text188">
              <span>Support</span>
            </span>
            <div className="home-ulyuolfv">
              <span className="home-text190">
                <span>Help Center</span>
              </span>
              <span className="home-text192">
                <span>AirCover</span>
              </span>
              <span className="home-text194">
                <span>Supporting people with disabilities</span>
              </span>
              <span className="home-text196">
                <span>Cancellation options</span>
              </span>
            </div>
          </div>
          <div className="home-section1l3ys1i1">
            <span className="home-text198">
              <span>Community</span>
            </span>
            <div className="home-ulyuolfv1">
              <span className="home-text200">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
              <span className="home-text202">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
            </div>
          </div>
          <div className="home-section1l3ys1i2">
            <span className="home-text204">
              <span>Hosting</span>
            </span>
            <div className="home-ulyuolfv2">
              <span className="home-text206">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
              <span className="home-text208">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
              <span className="home-text210">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
              <span className="home-text212">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
            </div>
          </div>
          <div className="home-section1l3ys1i3">
            <span className="home-text214">
              <span>Lorem</span>
            </span>
            <div className="home-ulyuolfv3">
              <span className="home-text216">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
              <span className="home-text218">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
              <span className="home-text220">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
              <span className="home-text222">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
            </div>
          </div>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/962e6343-45b4-4054-bfa2-8fe3d9cb3552/b7c0f1ff-5379-4a61-84e6-6b4477bad853?org_if_sml=13074"
            alt="Rectangle101421518"
            className="home-rectangle10142"
          />
          <span className="home-text224">
            <span>Contact Us</span>
          </span>
          <span className="home-text226">
            <span>Name</span>
            
          </span>
          <input type="text" className="home-rectangle10112"></input>
          <span className="home-text228">
            <span>Message</span>
          </span>
          <textarea type="text" className="home-rectangle10144"></textarea>
          <span className="home-text230">
            <span>Email</span>
          </span>
          <input type="text" className="home-rectangle10143"></input>
          <button className="submit-button">Submit</button>
          
          
          
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-home {
            width: 100%;
            height: 7702px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-mditick {
            top: 0px;
            left: 0px;
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-divczi8qzq {
            top: 1105px;
            left: 127px;
            width: 361px;
            display: flex;
            padding: 0 36px 0 0;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-divczi8qzq1 {
            top: 1105px;
            left: 540px;
            width: 361px;
            display: flex;
            padding: 0 36px 0 0;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-text {
            top: 869px;
            left: 131px;
            color: rgba(34, 34, 34, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Medium;
            text-align: left;
            font-family: Circular Std;
            font-weight: 500;
            line-height: 22px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text002 {
            top: 899px;
            left: 131px;
            color: rgba(113, 113, 113, 1);
            width: 361px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text004 {
            top: 869px;
            left: 544px;
            color: rgba(34, 34, 34, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Medium;
            text-align: left;
            font-family: Circular Std;
            font-weight: 500;
            line-height: 22px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text006 {
            top: 899px;
            left: 544px;
            color: rgba(113, 113, 113, 1);
            width: 360px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text008 {
            top: 869px;
            left: 957px;
            color: rgba(34, 34, 34, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Medium;
            text-align: left;
            font-family: Circular Std;
            font-weight: 500;
            line-height: 22px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text010 {
            top: 899px;
            left: 957px;
            color: rgba(113, 113, 113, 1);
            width: 352px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text012 {
            top: 1044.5px;
            left: 127px;
            color: rgba(34, 34, 34, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Medium;
            text-align: left;
            font-family: Circular Std;
            font-weight: 500;
            line-height: 22px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text014 {
            top: 1044.5px;
            left: 540px;
            color: rgba(34, 34, 34, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Medium;
            text-align: left;
            font-family: Circular Std;
            font-weight: 500;
            line-height: 22px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text016 {
            top: 1044.5px;
            left: 953px;
            color: rgba(34, 34, 34, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Medium;
            text-align: left;
            font-family: Circular Std;
            font-weight: 500;
            line-height: 22px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text018 {
            top: 1074.5px;
            left: 127px;
            color: rgba(113, 113, 113, 1);
            width: 361px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text020 {
            top: 1074.5px;
            left: 540px;
            color: rgba(113, 113, 113, 1);
            width: 361px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text022 {
            top: 1074.5px;
            left: 953px;
            color: rgba(113, 113, 113, 1);
            width: 361px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-divczi8qzq2 {
            top: 1088.5px;
            left: 953px;
            width: 361px;
            display: flex;
            padding: 0 36px 0 0;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-text024 {
            top: 1337.5px;
            left: 449px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 48px;
            font-style: Bold;
            text-align: center;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 56px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text026 {
            top: 1401.5px;
            left: 370px;
            color: rgba(0, 0, 0, 0.800000011920929);
            width: 700px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Book;
            text-align: center;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 30px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-bg {
            top: 1502.5px;
            left: 49px;
            width: 420px;
            height: 400px;
            position: absolute;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            box-sizing: content-box;
          }
          .home-text028 {
            top: 1625.5px;
            left: 88px;
            color: rgba(0, 0, 0, 1);
            width: 368px;
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 38px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text030 {
            top: 1572.5px;
            left: 88px;
            color: rgba(0, 0, 0, 1);
            width: 250px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 33px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text032 {
            top: 1802.5px;
            left: 162px;
            color: rgba(0, 0, 0, 1);
            width: 142px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 40px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text034 {
            top: 1540.5px;
            left: 88px;
            color: rgba(246, 195, 22, 1);
            width: 126px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Black;
            text-align: left;
            font-family: Circular Std;
            font-weight: 900;
            line-height: 32px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text035 {
            color: rgba(246, 195, 22, 1);
          }
          .home-ellipse {
            top: 1807.5px;
            left: 88px;
            width: 55px;
            height: 55px;
            position: absolute;
          }
          .home-group1000004330 {
            top: 1501.5px;
            left: 508px;
            width: 422px;
            height: 402px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-frame2 {
            top: 0px;
            left: 0px;
            width: 422px;
            height: 402px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-bg1 {
            top: 1501.5px;
            left: 507px;
            width: 422px;
            height: 402px;
            position: absolute;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            box-sizing: content-box;
          }
          .home-text036 {
            top: 1625.5px;
            left: 547px;
            color: rgba(0, 0, 0, 1);
            width: 362px;
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 38px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text038 {
            top: 1572.5px;
            left: 547px;
            color: rgba(0, 0, 0, 1);
            width: 250px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 33px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text040 {
            top: 1802.5px;
            left: 621px;
            color: rgba(0, 0, 0, 1);
            width: 142px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 40px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text042 {
            top: 1534.5px;
            left: 547px;
            color: rgba(246, 195, 22, 1);
            width: 126px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Black;
            text-align: left;
            font-family: Circular Std;
            font-weight: 900;
            line-height: 32px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text043 {
            color: rgba(246, 195, 22, 1);
          }
          .home-ellipse1 {
            top: 1807.5px;
            left: 547px;
            width: 55px;
            height: 55px;
            position: absolute;
          }
          .home-bg2 {
            top: 1501.5px;
            left: 968px;
            width: 422px;
            height: 402px;
            position: absolute;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            box-sizing: content-box;
          }
          .home-text044 {
            top: 1625.5px;
            left: 1008px;
            color: rgba(0, 0, 0, 1);
            width: 362px;
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 38px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text046 {
            top: 1572.5px;
            left: 1008px;
            color: rgba(0, 0, 0, 1);
            width: 250px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 33px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text048 {
            top: 1802.5px;
            left: 1082px;
            color: rgba(0, 0, 0, 1);
            width: 142px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 40px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text050 {
            top: 1534.5px;
            left: 1008px;
            color: rgba(246, 195, 22, 1);
            width: 126px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Black;
            text-align: left;
            font-family: Circular Std;
            font-weight: 900;
            line-height: 32px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text051 {
            color: rgba(246, 195, 22, 1);
          }
          .home-ellipse2 {
            top: 1807.5px;
            left: 1008px;
            width: 55px;
            height: 55px;
            position: absolute;
          }
          .home-text052 {
            top: 2136px;
            left: 669px;
            color: rgba(0, 0, 0, 1);
            width: 552px;
            height: auto;
            position: absolute;
            font-size: 38px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 52px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text054 {
            top: 2554px;
            left: 173px;
            color: rgba(0, 0, 0, 1);
            width: 552px;
            height: auto;
            position: absolute;
            font-size: 38px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 52px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text056 {
            top: 2970px;
            left: 669px;
            color: rgba(0, 0, 0, 1);
            width: 552px;
            height: auto;
            position: absolute;
            font-size: 38px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 52px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text058 {
            top: 3376px;
            left: 173px;
            color: rgba(0, 0, 0, 1);
            width: 552px;
            height: auto;
            position: absolute;
            font-size: 38px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 52px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text060 {
            top: 3778px;
            left: 669px;
            color: rgba(0, 0, 0, 1);
            width: 552px;
            height: auto;
            position: absolute;
            font-size: 38px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 52px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text062 {
            top: 4175px;
            left: 173px;
            color: rgba(0, 0, 0, 1);
            width: 552px;
            height: auto;
            position: absolute;
            font-size: 38px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 52px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text064 {
            top: 2243px;
            left: 674px;
            color: rgba(0, 0, 0, 1);
            width: 598px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text066 {
            top: 2661px;
            left: 173px;
            color: rgba(0, 0, 0, 1);
            width: 598px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text068 {
            top: 3483px;
            left: 173px;
            color: rgba(0, 0, 0, 1);
            width: 598px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text070 {
            top: 3077px;
            left: 674px;
            color: rgba(0, 0, 0, 1);
            width: 598px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text072 {
            top: 4282px;
            left: 173px;
            color: rgba(0, 0, 0, 1);
            width: 598px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text074 {
            top: 3885px;
            left: 669px;
            color: rgba(0, 0, 0, 1);
            width: 598px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text076 {
            top: 4639px;
            left: 542px;
            color: rgba(30, 30, 45, 1);
            height: auto;
            position: absolute;
            font-size: 40px;
            font-style: Black;
            text-align: center;
            font-family: Circular Std;
            font-weight: 900;
            line-height: 17.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text077 {
            color: rgba(30, 30, 45, 1);
          }
          .home-text078 {
            color: rgba(210, 0, 26, 1);
          }
          .home-text080 {
            top: 4674.14013671875px;
            left: 493.75px;
            color: rgba(30, 30, 45, 1);
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Book;
            text-align: center;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-divcard {
            top: 4735px;
            left: 214px;
            width: 313px;
            height: 530px;
            display: flex;
            padding: 48px 24px 16px 24px;
            overflow: hidden;
            position: absolute;
            box-shadow: 0px 1px 3px 0px rgba(50, 50, 50, 0.20000000298023224);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 16px 30px 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-divplan {
            width: 214.5px;
            height: 380px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-ulfs12 {
            gap: 4.799999237060547px;
            top: 195px;
            left: 0px;
            width: 253px;
            display: flex;
            padding: 0 0 0 12px;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-li {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 93.44999694824219px 0 0;
            align-items: center;
          }
          .home-li01 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 101.44999694824219px 0 0;
            align-items: center;
          }
          .home-li02 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 65.44999694824219px 0 0;
            align-items: center;
          }
          .home-divcard1 {
            top: 4735px;
            left: 911px;
            width: 313px;
            height: 530px;
            display: flex;
            padding: 48px 24px 16px 24px;
            overflow: hidden;
            position: absolute;
            box-shadow: 0px 1px 3px 0px rgba(50, 50, 50, 0.20000000298023224);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 16px 30px 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-divplan1 {
            width: 214.5px;
            height: 380px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-ulfs121 {
            gap: 4.799999237060547px;
            top: 195px;
            left: 0px;
            width: 253px;
            display: flex;
            padding: 0 0 0 12px;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-li03 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 93.44999694824219px 0 0;
            align-items: center;
          }
          .home-li04 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 101.44999694824219px 0 0;
            align-items: center;
          }
          .home-li05 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 65.44999694824219px 0 0;
            align-items: center;
          }
          .home-divplan2 {
            top: 4783px;
            left: 949px;
            width: 214px;
            height: 380px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-ulfs122 {
            gap: 4.799999237060547px;
            top: 195px;
            left: 0px;
            width: 253px;
            display: flex;
            padding: 0 0 0 12px;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-li06 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 93.44999694824219px 0 0;
            align-items: center;
          }
          .home-li07 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 101.44999694824219px 0 0;
            align-items: center;
          }
          .home-li08 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 65.44999694824219px 0 0;
            align-items: center;
          }
          .home-divcard2 {
            top: 4735px;
            left: 565px;
            width: 313px;
            height: 530px;
            display: flex;
            padding: 50px 26px 18px 26px;
            overflow: hidden;
            position: absolute;
            box-shadow: 0px 1px 3px 0px rgba(50, 50, 50, 0.20000000298023224);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(210, 0, 26, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 16px 30px 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-divplan3 {
            width: 210.5px;
            height: 380px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-text082 {
            top: 15px;
            left: 84.0302734375px;
            color: rgba(30, 30, 45, 1);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: 36px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text084 {
            top: 52px;
            left: 77.76953125px;
            color: rgba(34, 34, 34, 1);
            height: auto;
            position: absolute;
            font-size: 40px;
            font-style: ExtraBold;
            text-align: center;
            font-family: Open Sans;
            font-weight: 800;
            line-height: 60px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text086 {
            top: 112px;
            left: 94px;
            color: rgba(30, 30, 45, 1);
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Poppins;
            font-weight: 400;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-abtn {
            top: 143px;
            left: 50px;
            width: 145px;
            height: 29px;
            display: flex;
            justify-content: center;
            align-items: center;
            color:white;
            overflow: hidden;
            position: absolute;
            box-shadow: 0px 1px 3px 0px rgba(50, 50, 50, 0.20000000298023224);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(210, 0, 26, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 35px;
            background-color: rgba(210, 0, 26, 1);
          }
          .home-text088 {
            top: 7px;
            left: 32.77000045776367px;
            color: rgba(255, 255, 255, 1);
            width: 80px;
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: center;
            font-family: Poppins;
            font-weight: 400;
            line-height: 15px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-ulfs123 {
            gap: 4.799999237060547px;
            top: 195px;
            left: 0px;
            width: 283px;
            display: flex;
            padding: 0 0 0 12px;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-li09 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 74.44999694824219px 0 0;
            align-items: center;
          }
          .home-text090 {
            color: rgba(30, 30, 45, 1);
            height: auto;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-li10 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 89.44999694824219px 0 0;
            align-items: center;
          }
          .home-text092 {
            color: rgba(30, 30, 45, 1);
            height: auto;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-li11 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 53.45000076293945px 0 0;
            align-items: center;
          }
          .home-text094 {
            color: rgba(30, 30, 45, 1);
            height: auto;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-li12 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 103.44999694824219px 0 0;
            align-items: center;
          }
          .home-text096 {
            color: rgba(30, 30, 45, 1);
            height: auto;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text098 {
            top: 4800px;
            left: 315.0302734375px;
            color: rgba(30, 30, 45, 1);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Bold;
            text-align: center;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 36px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text100 {
            top: 4800px;
            left: 1021.0302734375px;
            color: rgba(30, 30, 45, 1);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Bold;
            text-align: center;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 36px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text102 {
            top: 4837px;
            left: 308.76953125px;
            color: rgba(34, 34, 34, 1);
            height: auto;
            position: absolute;
            font-size: 40px;
            font-style: Black;
            text-align: center;
            font-family: Circular Std;
            font-weight: 900;
            line-height: 60px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text104 {
            top: 4837px;
            left: 1014.76953125px;
            color: rgba(34, 34, 34, 1);
            height: auto;
            position: absolute;
            font-size: 40px;
            font-style: Black;
            text-align: center;
            font-family: Circular Std;
            font-weight: 900;
            line-height: 60px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text106 {
            top: 4897px;
            left: 327px;
            color: rgba(30, 30, 45, 1);
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Book;
            text-align: center;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text108 {
            top: 4897px;
            left: 1033px;
            color: rgba(30, 30, 45, 1);
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Book;
            text-align: center;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-abtn1 {
            top: 4928px;
            left: 300px;
            width: 145px;
            height: 29px;
            display: flex;
            
            overflow: hidden;
            position: absolute;
            box-shadow: 0px 1px 3px 0px rgba(50, 50, 50, 0.20000000298023224);
            justify-content: center;
            align-items: center;
            color:white;
            
            flex-shrink: 0;
            border-color: rgba(210, 0, 26, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 35px;
            background-color: rgba(210, 0, 26, 1);
          }
          .home-text110 {
            top: 7px;
            left: 32.77000045776367px;
            color: rgba(255, 255, 255, 1);
            width: 80px;
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: center;
            font-family: Poppins;
            font-weight: 400;
            line-height: 15px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-abtn2 {
            top: 4928px;
            left: 995px;
            width: 145px;
            height: 29px;
            display: flex;
            justify-content: center;
            align-items: center;
            color:white;
            overflow: hidden;
            position: absolute;
            box-shadow: 0px 1px 3px 0px rgba(50, 50, 50, 0.20000000298023224);
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(210, 0, 26, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 35px;
            background-color: rgba(210, 0, 26, 1);
          }
          .home-text112 {
            top: 7px;
            left: 32.77000045776367px;
            color: rgba(255, 255, 255, 1);
            width: 80px;
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: center;
            font-family: Poppins;
            font-weight: 400;
            line-height: 15px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-ulfs124 {
            gap: 4.799999237060547px;
            top: 4980px;
            left: 231px;
            width: 283px;
            display: flex;
            padding: 0 0 0 12px;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-li13 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 74.44999694824219px 0 0;
            align-items: center;
          }
          .home-text114 {
            color: rgba(30, 30, 45, 1);
            height: auto;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-li14 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 89.44999694824219px 0 0;
            align-items: center;
          }
          .home-text116 {
            color: rgba(30, 30, 45, 1);
            height: auto;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-li15 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 53.45000076293945px 0 0;
            align-items: center;
          }
          .home-text118 {
            color: rgba(30, 30, 45, 1);
            height: auto;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-li16 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 103.44999694824219px 0 0;
            align-items: center;
          }
          .home-text120 {
            color: rgba(30, 30, 45, 1);
            height: auto;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-ulfs125 {
            gap: 4.799999237060547px;
            top: 4980px;
            left: 942px;
            width: 283px;
            display: flex;
            padding: 0 0 0 12px;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-li17 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 74.44999694824219px 0 0;
            align-items: center;
          }
          .home-text122 {
            color: rgba(30, 30, 45, 1);
            height: auto;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-li18 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 89.44999694824219px 0 0;
            align-items: center;
          }
          .home-text124 {
            color: rgba(30, 30, 45, 1);
            height: auto;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-li19 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 53.45000076293945px 0 0;
            align-items: center;
          }
          .home-text126 {
            color: rgba(30, 30, 45, 1);
            height: auto;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-li20 {
            gap: 6.050000190734863px;
            display: flex;
            padding: 0 103.44999694824219px 0 0;
            align-items: center;
          }
          .home-text128 {
            color: rgba(30, 30, 45, 1);
            height: auto;
            font-size: 16px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-spanplanfeatured {
            top: 4735px;
            left: 565px;
            width: 174px;
            height: 21px;
            display: flex;
            padding: 3px 11.1899995803833px 4px 11.199999809265137px;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 12.800000190734863px 0 16px;
            background-color: rgba(210, 0, 26, 1);
          }
          .home-text130 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 12px;
            font-style: Bold;
            text-align: center;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-divcn7r9wh {
            top: 6863px;
            left: 80px;
            width: 1280px;
            height: 454px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-divcamqtoq {
            gap: 32px;
            top: -1337px;
            left: 420px;
            width: 640px;
            display: flex;
            padding: 32px 0;
            position: absolute;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-divfses2qr {
            width: 640px;
            height: 26px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-text132 {
            left: -200px;
            color: rgba(34, 34, 34, 1);
            height: auto;
            position: absolute;
            font-size: 22px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 26px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-frame {
            top: 2px;
            left: 624px;
            width: 16px;
            height: 16px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-group {
            top: 6px;
            left: 2px;
            width: 12px;
            height: 5.792892932891846px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector {
            top: 0px;
            left: 0px;
            width: 12px;
            height: 6px;
            position: absolute;
          }
          .home-hrd1xtkzin {
            width: 640px;
            height: 1px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(221, 221, 221, 1);
            border-style: solid;
            border-width: Symbol(figma.mixed) px;
          }
          .home-divfses2qr1 {
            width: 640px;
            height: 26px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-text134 {
            left: -198px;
            color: rgba(34, 34, 34, 1);
            height: auto;
            position: absolute;
            font-size: 22px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 26px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-frame1 {
            top: 2px;
            left: 624px;
            width: 16px;
            height: 16px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-group01 {
            top: 6px;
            left: 2px;
            width: 12px;
            height: 5.792892932891846px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0001 {
            top: 0px;
            left: 0px;
            width: 12px;
            height: 6px;
            position: absolute;
          }
          .home-hrd1xtkzin1 {
            width: 640px;
            height: 1px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(221, 221, 221, 1);
            border-style: solid;
            border-width: Symbol(figma.mixed) px;
          }
          .home-divfses2qr2 {
            width: 640px;
            height: 26px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-text136 {
            left: -200px;
            color: rgba(34, 34, 34, 1);
            height: auto;
            position: absolute;
            font-size: 22px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 26px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-frame2 {
            top: 2px;
            left: 624px;
            width: 16px;
            height: 16px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-group02 {
            top: 6px;
            left: 2px;
            width: 12px;
            height: 5.792892932891846px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0002 {
            top: 0px;
            left: 0px;
            width: 12px;
            height: 6px;
            position: absolute;
          }
          .home-hrd1xtkzin2 {
            width: 640px;
            height: 1px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(221, 221, 221, 1);
            border-style: solid;
            border-width: Symbol(figma.mixed) px;
          }
          .home-divfses2qr3 {
            width: 640px;
            height: 26px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-text138 {
            left: -200px;
            color: rgba(34, 34, 34, 1);
            height: auto;
            position: absolute;
            font-size: 22px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 26px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-frame3 {
            top: 2px;
            left: 624px;
            width: 16px;
            height: 16px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-group03 {
            top: 6px;
            left: 2px;
            width: 12px;
            height: 5.792892932891846px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0003 {
            top: 0px;
            left: 0px;
            width: 12px;
            height: 6px;
            position: absolute;
          }
          .home-hrd1xtkzin3 {
            width: 640px;
            height: 1px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(221, 221, 221, 1);
            border-style: solid;
            border-width: Symbol(figma.mixed) px;
          }
          .home-divfses2qr4 {
            width: 640px;
            height: 26px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-text140 {
            left: -200px;
            color: rgba(34, 34, 34, 1);
            height: auto;
            position: absolute;
            font-size: 22px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 26px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-frame4 {
            top: 2px;
            left: 624px;
            width: 16px;
            height: 16px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-group04 {
            top: 6px;
            left: 2px;
            width: 12px;
            height: 5.792892932891846px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0004 {
            top: 0px;
            left: 0px;
            width: 12px;
            height: 6px;
            position: absolute;
          }
          .home-line235 {
            top: -973px;
            left: 220px;
            width: 840px;
            height: 1px;
            position: absolute;
          }
          .home-line236 {
            top: -1064px;
            left: 220px;
            width: 840px;
            height: 1px;
            position: absolute;
          }
          .home-line2361 {
            top: 5708px;
            left: 300px;
            width: 840px;
            height: 1px;
            position: absolute;
          }
          .home-line237 {
            top: 5617px;
            left: 300px;
            width: 840px;
            height: 1px;
            position: absolute;
          }
          .home-text142 {
            top: 5425px;
            left: 466px;
            color: rgba(30, 30, 45, 1);
            height: auto;
            position: absolute;
            font-size: 40px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 17.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text143 {
            color: rgba(30, 30, 45, 1);
          }
          .home-mditick1 {
            top: 5060px;
            left: 534px;
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-ellipse6 {
            top: 5048px;
            left: 588px;
            width: 18px;
            height: 18px;
            position: absolute;
          }
          .home-ellipse10 {
            top: 5048px;
            left: 228px;
            width: 18px;
            height: 18px;
            position: absolute;
          }
          .home-ellipse14 {
            top: 5048px;
            left: 939px;
            width: 18px;
            height: 18px;
            position: absolute;
          }
          .home-ellipse7 {
            top: 5025px;
            left: 588px;
            width: 18px;
            height: 18px;
            position: absolute;
          }
          .home-ellipse11 {
            top: 5025px;
            left: 228px;
            width: 18px;
            height: 18px;
            position: absolute;
          }
          .home-ellipse15 {
            top: 5025px;
            left: 939px;
            width: 18px;
            height: 18px;
            position: absolute;
          }
          .home-ellipse8 {
            top: 5001px;
            left: 588px;
            width: 18px;
            height: 18px;
            position: absolute;
          }
          .home-ellipse12 {
            top: 5001px;
            left: 228px;
            width: 18px;
            height: 18px;
            position: absolute;
          }
          .home-ellipse16 {
            top: 5001px;
            left: 939px;
            width: 18px;
            height: 18px;
            position: absolute;
          }
          .home-ellipse9 {
            top: 4980px;
            left: 588px;
            width: 18px;
            height: 18px;
            position: absolute;
          }
          .home-ellipse13 {
            top: 4980px;
            left: 228px;
            width: 18px;
            height: 18px;
            position: absolute;
          }
          .home-ellipse17 {
            top: 4980px;
            left: 939px;
            width: 18px;
            height: 18px;
            position: absolute;
          }
          .home-mditick2 {
            top: 5599px;
            left: 516px;
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-vector0005 {
            top: 4954px;
            left: 621px;
            width: 5px;
            height: 4px;
            position: absolute;
          }
          .home-vector0006 {
            top: 4954px;
            left: 261px;
            width: 5px;
            height: 4px;
            position: absolute;
          }
          .home-vector0007 {
            top: 4954px;
            left: 972px;
            width: 5px;
            height: 4px;
            position: absolute;
          }
          .home-vector0008 {
            top: 5053px;
            left: 592px;
            width: 10px;
            height: 8px;
            position: absolute;
          }
          .home-vector0009 {
            top: 5053px;
            left: 232px;
            width: 10px;
            height: 8px;
            position: absolute;
          }
          .home-vector0010 {
            top: 5053px;
            left: 943px;
            width: 10px;
            height: 8px;
            position: absolute;
          }
          .home-vector0011 {
            top: 5030px;
            left: 592px;
            width: 10px;
            height: 8px;
            position: absolute;
          }
          .home-vector0012 {
            top: 5030px;
            left: 232px;
            width: 10px;
            height: 8px;
            position: absolute;
          }
          .home-vector0013 {
            top: 5030px;
            left: 943px;
            width: 10px;
            height: 8px;
            position: absolute;
          }
          .home-vector0014 {
            top: 5006px;
            left: 592px;
            width: 10px;
            height: 8px;
            position: absolute;
          }
          .home-vector0015 {
            top: 5006px;
            left: 232px;
            width: 10px;
            height: 8px;
            position: absolute;
          }
          .home-vector0016 {
            top: 5006px;
            left: 943px;
            width: 10px;
            height: 8px;
            position: absolute;
          }
          .home-vector0017 {
            top: 4985px;
            left: 592px;
            width: 10px;
            height: 8px;
            position: absolute;
          }
          .home-vector0018 {
            top: 4985px;
            left: 232px;
            width: 10px;
            height: 8px;
            position: absolute;
          }
          .home-vector0019 {
            top: 4985px;
            left: 943px;
            width: 10px;
            height: 8px;
            position: absolute;
          }
          .home-rectangle10052 {
            top: 0px;
            left: 0px;
            width: 1440px;
            height: 741px;
            position: absolute;
          }
          .home-rectangle10053 {
            top: 0px;
            left: 0px;
            width: 1440px;
            height: 741px;
            position: absolute;
          }
          .home-rectangle10145 {
            top: 0px;
            left: 0px;
            width: 1440px;
            height: 741px;
            position: absolute;
          }
          .home-vector0020 {
            top: 19px;
            left: 1293px;
            width: 35px;
            height: 35px;
            position: absolute;
          }
          .home-rectangle4 {
            top: 16px;
            left: 1103px;
            width: 155px;
            height: 43px;
            position: absolute;
            border-radius: 4px;
          }
          .home-rectangle10054 {
            top: 343px;
            left: 603px;
            width: 155px;
            height: 43px;
            position: absolute;
            border-radius: 4px;
          }
          .home-rectangle10055 {
            top: 1210px;
            left: 643px;
            width: 155px;
            height: 43px;
            position: absolute;
            border-radius: 4px;
          }
          .home-text145 {
            top: 26px;
            left: 1135px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: SemiBold;
            text-align: center;
            font-family: Roboto;
            font-weight: 600;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text147 {
            top: 353px;
            left: 635px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: SemiBold;
            text-align: center;
            font-family: Roboto;
            font-weight: 600;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text149 {
            top: 1220px;
            left: 674px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: SemiBold;
            text-align: center;
            font-family: Roboto;
            font-weight: 600;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text151 {
            top: 27px;
            left: 550px;
            color: rgba(216, 38, 57, 1);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text153 {
            top: 27px;
            left: 635px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: right;
            font-family: Roboto;
            font-weight: 500;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text155 {
            top: 27px;
            left: 739px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: right;
            font-family: Roboto;
            font-weight: 500;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text157 {
            top: 27px;
            left: 822px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: right;
            font-family: Roboto;
            font-weight: 500;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text159 {
            top: 27px;
            left: 993px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Roboto;
            font-weight: 500;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-rectangle6363 {
            top: 0px;
            left: 550px;
            width: 38px;
            height: 4px;
            position: absolute;
            border-radius: 1px;
          }
          .home-text161 {
            top: 227px;
            left: 492px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text162 {
            top: 271px;
            left: 305px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 48px;
            font-style: Medium;
            text-align: center;
            font-family: Circular Std;
            font-weight: 500;
            line-height: 52px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text163 {
            color: rgba(255, 255, 255, 1);
          }
          .home-rectangle10056 {
            top: 1949px;
            left: 686px;
            width: 68px;
            height: 6px;
            position: absolute;
            border-radius: 3px;
          }
          .home-rectangle10058 {
            top: 1949px;
            left: 762px;
            width: 68px;
            height: 6px;
            position: absolute;
            border-radius: 3px;
          }
          .home-rectangle10057 {
            top: 1949px;
            left: 610px;
            width: 68px;
            height: 6px;
            position: absolute;
            border-radius: 3px;
          }
          .home-seminarpana1 {
            top: 2618px;
            left: 51px;
            width: 575px;
            height: 383px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-freepikbackgroundcompleteinject2 {
            top: -540.9915771484375px;
            left: 24.640666961669922px;
            width: 512.5626220703125px;
            height: 894.7839965820312px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0021 {
            top: 816.376220703125px;
            left: 5.611999988555908px;
            width: 11px;
            height: 8px;
            position: absolute;
          }
          .home-vector0022 {
            top: 852.9699096679688px;
            left: 1.0733344554901123px;
            width: 12px;
            height: 3px;
            position: absolute;
          }
          .home-vector0023 {
            top: 845.09326171875px;
            left: 0px;
            width: 11px;
            height: 6px;
            position: absolute;
          }
          .home-vector0024 {
            top: 842.029541015625px;
            left: 10.444350242614746px;
            width: 5px;
            height: 11px;
            position: absolute;
          }
          .home-vector0025 {
            top: 799.2791137695312px;
            left: 7.045668601989746px;
            width: 9px;
            height: 17px;
            position: absolute;
          }
          .home-vector0026 {
            top: 888.6943359375px;
            left: 13.907333374023438px;
            width: 1px;
            height: 6px;
            position: absolute;
          }
          .home-vector0027 {
            top: 888.6100463867188px;
            left: 16.00534439086914px;
            width: 0px;
            height: 6px;
            position: absolute;
          }
          .home-freepik-floorinject2 {
            top: -216.1080322265625px;
            left: 30.559326171875px;
            width: 513.88134765625px;
            height: 0.39066749811172485px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-freepik-stageinject2 {
            top: -274.216796875px;
            left: 186.1083984375px;
            width: 310.538330078125px;
            height: 58.30024719238281px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-freepik-plantinject2 {
            top: -365.974609375px;
            left: 227.140380859375px;
            width: 51.734676361083984px;
            height: 92.2787094116211px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-group05 {
            top: 8.552217483520508px;
            left: 16.917396545410156px;
            width: 11.371541976928711px;
            height: 24.20062828063965px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-group06 {
            top: 42.14300537109375px;
            left: 0.000005086262717668433px;
            width: 21.26842498779297px;
            height: 13.298770904541016px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-freepik-boardinject2 {
            top: -535.6678466796875px;
            left: 58.34326171875px;
            width: 199.01132202148438px;
            height: 157.9951629638672px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-freepikspeechbubble2inject2 {
            top: -438.302001953125px;
            left: 491.393798828125px;
            width: 36.28257751464844px;
            height: 39.88604736328125px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-freepikspeechbubble1inject2 {
            top: -513.501708984375px;
            left: 333.362060546875px;
            width: 33.609352111816406px;
            height: 32.079917907714844px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-freepikcharacter5inject2 {
            top: -397.818603515625px;
            left: 445.2081298828125px;
            width: 81.62220001220703px;
            height: 183.06747436523438px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-freepikcharacter4inject2 {
            top: -397.45361328125px;
            left: 359.650390625px;
            width: 76.90106201171875px;
            height: 182.25709533691406px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-freepikcharacter3inject2 {
            top: -510.45849609375px;
            left: 239.35400390625px;
            width: 135.1389617919922px;
            height: 245.16128540039062px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-group07 {
            top: 226.12376403808594px;
            left: 94.05447387695312px;
            width: 1.7876743078231812px;
            height: 1.810725450515747px;
            display: flex;
            opacity: 0.6;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-freepikcharacter2inject2 {
            top: -401.64013671875px;
            left: 154.10009765625px;
            width: 69.89332580566406px;
            height: 187.16116333007812px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-group08 {
            top: 78.53527069091797px;
            left: 3.7492740154266357px;
            width: 62.972145080566406px;
            height: 22.14710807800293px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-freepikcharacter1inject2 {
            top: -390.7786865234375px;
            left: 62.230224609375px;
            width: 68.86200714111328px;
            height: 175.2451934814453px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-productqualitypana1 {
            top: 2400px;
            left: 769px;
            width: 500px;
            height: 500px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-freepikbackgroundcompleteinject21 {
            top: 43.06999969482422px;
            left: 27.479999542236328px;
            width: 444.3499755859375px;
            height: 388.6499938964844px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0028 {
            top: 271.3500061035156px;
            left: 403.75px;
            width: 72px;
            height: 56px;
            position: absolute;
          }
          .home-vector0029 {
            top: 266.4800109863281px;
            left: 345.3599853515625px;
            width: 9px;
            height: 10px;
            position: absolute;
          }
          .home-vector0030 {
            top: 215.75px;
            left: 373.5px;
            width: 8px;
            height: 12px;
            position: absolute;
          }
          .home-vector0031 {
            top: 259.28997802734375px;
            left: 373.5px;
            width: 8px;
            height: 12px;
            position: absolute;
          }
          .home-vector0032 {
            top: 216.97000122070312px;
            left: 349.28997802734375px;
            width: 0px;
            height: 55px;
            position: absolute;
          }
          .home-vector0033 {
            top: 367.3299865722656px;
            left: 426.6999816894531px;
            width: 125px;
            height: 96px;
            position: absolute;
          }
          .home-vector0034 {
            top: 358.94000244140625px;
            left: 325.9499816894531px;
            width: 15px;
            height: 17px;
            position: absolute;
          }
          .home-vector0035 {
            top: 271.4100036621094px;
            left: 374.5px;
            width: 14px;
            height: 21px;
            position: absolute;
          }
          .home-vector0036 {
            top: 346.5199890136719px;
            left: 374.5px;
            width: 14px;
            height: 21px;
            position: absolute;
          }
          .home-vector0037 {
            top: 273.5099792480469px;
            left: 332.739990234375px;
            width: 1px;
            height: 94px;
            position: absolute;
          }
          .home-vector0038 {
            top: 71.13999938964844px;
            left: 401.1299743652344px;
            width: 43px;
            height: 41px;
            position: absolute;
          }
          .home-vector0039 {
            top: 245.89999389648438px;
            left: 11.40999984741211px;
            width: 27px;
            height: 26px;
            position: absolute;
          }
          .home-vector0040 {
            top: 171.58999633789062px;
            left: 0px;
            width: 61px;
            height: 58px;
            position: absolute;
          }
          .home-vector0041 {
            top: 132.25px;
            left: 403.75px;
            width: 26px;
            height: 25px;
            position: absolute;
          }
          .home-vector0042 {
            top: 0px;
            left: 271.5299987792969px;
            width: 26px;
            height: 25px;
            position: absolute;
          }
          .home-vector0043 {
            top: 87.34000396728516px;
            left: 368.2099914550781px;
            width: 17px;
            height: 16px;
            position: absolute;
          }
          .home-vector0044 {
            top: 357.03997802734375px;
            left: 116.82000732421875px;
            width: 33px;
            height: 32px;
            position: absolute;
          }
          .home-vector0045 {
            top: 346.69000244140625px;
            left: 140.1300048828125px;
            width: 14px;
            height: 13px;
            position: absolute;
          }
          .home-freepik-starsinject2 {
            top: 341.80999755859375px;
            left: 349.5199890136719px;
            width: 43.040008544921875px;
            height: 35.910003662109375px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0046 {
            top: 8.110015869140625px;
            left: 0px;
            width: 29px;
            height: 28px;
            position: absolute;
          }
          .home-vector0047 {
            top: 0px;
            left: 29.27001953125px;
            width: 14px;
            height: 13px;
            position: absolute;
          }
          .home-freepikspeechbubbleinject2 {
            top: 42.6249885559082px;
            left: 357.20928955078125px;
            width: 69.31005096435547px;
            height: 69.31501770019531px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0048 {
            top: 0.17498397827148438px;
            left: 0.19415283203125px;
            width: 69px;
            height: 69px;
            position: absolute;
          }
          .home-vector0049 {
            top: 0px;
            left: 0px;
            width: 69px;
            height: 69px;
            position: absolute;
          }
          .home-vector0050 {
            top: 20.425010681152344px;
            left: 15.1007080078125px;
            width: 41px;
            height: 28px;
            position: absolute;
          }
          .home-freepik-clipboardinject2 {
            top: 53px;
            left: 33.40227127075195px;
            width: 271.50018310546875px;
            height: 339.607421875px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0051 {
            top: 0.1815338134765625px;
            left: 0.1994476318359375px;
            width: 271px;
            height: 339px;
            position: absolute;
          }
          .home-vector0052 {
            top: 0px;
            left: 0px;
            width: 272px;
            height: 340px;
            position: absolute;
          }
          .home-group09 {
            top: 235.97000122070312px;
            left: 74.81773376464844px;
            width: 182.57000732421875px;
            height: 93.3699951171875px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0053 {
            top: 0px;
            left: 0px;
            width: 183px;
            height: 93px;
            position: absolute;
          }
          .home-group10 {
            top: 10.630001068115234px;
            left: 155.61773681640625px;
            width: 7.8899993896484375px;
            height: 17.700000762939453px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0054 {
            top: 0px;
            left: 0px;
            width: 8px;
            height: 18px;
            position: absolute;
          }
          .home-vector0055 {
            top: 12.699996948242188px;
            left: 10.35772705078125px;
            width: 251px;
            height: 314px;
            position: absolute;
          }
          .home-vector0056 {
            top: 12.540000915527344px;
            left: 10.347728729248047px;
            width: 251px;
            height: 315px;
            position: absolute;
          }
          .home-vector0057 {
            top: 24.066566467285156px;
            left: 57.66457748413086px;
            width: 99px;
            height: 29px;
            position: absolute;
          }
          .home-vector0058 {
            top: 0.15000152587890625px;
            left: 91.19772338867188px;
            width: 26px;
            height: 26px;
            position: absolute;
          }
          .home-vector0059 {
            top: 3.9988441467285156px;
            left: 63.8676872253418px;
            width: 84px;
            height: 19px;
            position: absolute;
          }
          .home-vector0060 {
            top: 29.37982940673828px;
            left: 61.12580490112305px;
            width: 4px;
            height: 18px;
            position: absolute;
          }
          .home-vector0061 {
            top: 8.639999389648438px;
            left: 151.88772583007812px;
            width: 4px;
            height: 16px;
            position: absolute;
          }
          .home-vector0062 {
            top: 29.38788604736328px;
            left: 65.65762329101562px;
            width: 86px;
            height: 19px;
            position: absolute;
          }
          .home-vector0063 {
            top: 108.50686645507812px;
            left: 42.97744369506836px;
            width: 58px;
            height: 13px;
            position: absolute;
          }
          .home-vector0064 {
            top: 97.61878967285156px;
            left: 46.25772476196289px;
            width: 152px;
            height: 34px;
            position: absolute;
          }
          .home-vector0065 {
            top: 106.99807739257812px;
            left: 48.337703704833984px;
            width: 152px;
            height: 34px;
            position: absolute;
          }
          .home-vector0066 {
            top: 116.31880187988281px;
            left: 50.41770553588867px;
            width: 152px;
            height: 34px;
            position: absolute;
          }
          .home-vector0067 {
            top: 125.66856384277344px;
            left: 52.50772476196289px;
            width: 152px;
            height: 34px;
            position: absolute;
          }
          .home-vector0068 {
            top: 134.99900817871094px;
            left: 54.59772872924805px;
            width: 151px;
            height: 34px;
            position: absolute;
          }
          .home-vector0069 {
            top: 184.2100067138672px;
            left: 63.71296310424805px;
            width: 20px;
            height: 20px;
            position: absolute;
          }
          .home-vector0070 {
            top: 185.87103271484375px;
            left: 91.45396423339844px;
            width: 117px;
            height: 10px;
            position: absolute;
          }
          .home-vector0071 {
            top: 212.69000244140625px;
            left: 70.03773498535156px;
            width: 20px;
            height: 20px;
            position: absolute;
          }
          .home-vector0072 {
            top: 214.33148193359375px;
            left: 97.78903198242188px;
            width: 117px;
            height: 10px;
            position: absolute;
          }
          .home-vector0073 {
            top: 241.1199951171875px;
            left: 76.30296325683594px;
            width: 20px;
            height: 20px;
            position: absolute;
          }
          .home-vector0074 {
            top: 242.79168701171875px;
            left: 104.13627624511719px;
            width: 117px;
            height: 10px;
            position: absolute;
          }
          .home-vector0075 {
            top: 185.14999389648438px;
            left: 68.20773315429688px;
            width: 16px;
            height: 14px;
            position: absolute;
          }
          .home-vector0076 {
            top: 212.64999389648438px;
            left: 74.33772277832031px;
            width: 16px;
            height: 14px;
            position: absolute;
          }
          .home-vector0077 {
            top: 240.85000610351562px;
            left: 80.62773132324219px;
            width: 16px;
            height: 14px;
            position: absolute;
          }
          .home-vector0078 {
            top: 285.99652099609375px;
            left: 89.75770568847656px;
            width: 43px;
            height: 10px;
            position: absolute;
          }
          .home-vector0079 {
            top: 280.8487548828125px;
            left: 138.5977325439453px;
            width: 16px;
            height: 4px;
            position: absolute;
          }
          .home-vector0080 {
            top: 258.4053039550781px;
            left: 186.9676971435547px;
            width: 39px;
            height: 9px;
            position: absolute;
          }
          .home-vector0081 {
            top: 266.4342956542969px;
            left: 183.8777313232422px;
            width: 43px;
            height: 18px;
            position: absolute;
          }
          .home-vector0082 {
            top: 271.9295959472656px;
            left: 185.48773193359375px;
            width: 52px;
            height: 13px;
            position: absolute;
          }
          .home-vector0083 {
            top: 69.8107681274414px;
            left: 77.5797119140625px;
            width: 80px;
            height: 15px;
            position: absolute;
          }
          .home-freepik-characterinject2 {
            top: 63.77591323852539px;
            left: 116.45065307617188px;
            width: 296.5493469238281px;
            height: 417.9841003417969px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0084 {
            top: 265.1540832519531px;
            left: 145.66934204101562px;
            width: 91px;
            height: 146px;
            position: absolute;
          }
          .home-group11 {
            top: 287.49407958984375px;
            left: 151.02935791015625px;
            width: 56.839996337890625px;
            height: 35.879432678222656px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0085 {
            top: 0px;
            left: 0px;
            width: 57px;
            height: 36px;
            position: absolute;
          }
          .home-vector0086 {
            top: 301.8340148925781px;
            left: 175.8641357421875px;
            width: 16px;
            height: 62px;
            position: absolute;
          }
          .home-vector0087 {
            top: 272.0440979003906px;
            left: 57.859344482421875px;
            width: 91px;
            height: 146px;
            position: absolute;
          }
          .home-group12 {
            top: 289.4841003417969px;
            left: 90.18934631347656px;
            width: 54.03001403808594px;
            height: 38.28997802734375px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0088 {
            top: 0px;
            left: 0px;
            width: 54px;
            height: 38px;
            position: absolute;
          }
          .home-vector0089 {
            top: 17.674083709716797px;
            left: 0.27935028076171875px;
            width: 296px;
            height: 296px;
            position: absolute;
          }
          .home-vector0090 {
            top: 38.22408676147461px;
            left: 96.34934997558594px;
            width: 17px;
            height: 45px;
            position: absolute;
          }
          .home-vector0091 {
            top: 48.6740837097168px;
            left: 121.55488586425781px;
            width: 5px;
            height: 29px;
            position: absolute;
          }
          .home-vector0092 {
            top: 25.314075469970703px;
            left: 148.95498657226562px;
            width: 1px;
            height: 50px;
            position: absolute;
          }
          .home-vector0093 {
            top: 52.38387680053711px;
            left: 165.83486938476562px;
            width: 8px;
            height: 25px;
            position: absolute;
          }
          .home-vector0094 {
            top: 37.17361068725586px;
            left: 183.08935546875px;
            width: 18px;
            height: 44px;
            position: absolute;
          }
          .home-vector0095 {
            top: 64.65408325195312px;
            left: 195.54934692382812px;
            width: 18px;
            height: 23px;
            position: absolute;
          }
          .home-vector0096 {
            top: 69.58308410644531px;
            left: 213.76840209960938px;
            width: 36px;
            height: 33px;
            position: absolute;
          }
          .home-vector0097 {
            top: 105.90408325195312px;
            left: 224.77935791015625px;
            width: 21px;
            height: 11px;
            position: absolute;
          }
          .home-vector0098 {
            top: 118.09027099609375px;
            left: 232.73922729492188px;
            width: 42px;
            height: 15px;
            position: absolute;
          }
          .home-vector0099 {
            top: 167.197265625px;
            left: 238.62930297851562px;
            width: 46px;
            height: 4px;
            position: absolute;
          }
          .home-vector0100 {
            top: 199.4312744140625px;
            left: 234.24908447265625px;
            width: 43px;
            height: 20px;
            position: absolute;
          }
          .home-vector0101 {
            top: 229.05331420898438px;
            left: 214.87747192382812px;
            width: 30px;
            height: 36px;
            position: absolute;
          }
          .home-vector0102 {
            top: 240.48410034179688px;
            left: 201.29934692382812px;
            width: 18px;
            height: 31px;
            position: absolute;
          }
          .home-vector0103 {
            top: 249.60409545898438px;
            left: 186.48934936523438px;
            width: 16px;
            height: 45px;
            position: absolute;
          }
          .home-vector0104 {
            top: 254.46408081054688px;
            left: 165.68936157226562px;
            width: 4px;
            height: 24px;
            position: absolute;
          }
          .home-vector0105 {
            top: 256.4541015625px;
            left: 147.98199462890625px;
            width: 3px;
            height: 50px;
            position: absolute;
          }
          .home-vector0106 {
            top: 256.4541015625px;
            left: 126.42935180664062px;
            width: 4px;
            height: 17px;
            position: absolute;
          }
          .home-vector0107 {
            top: 241.22409057617188px;
            left: 89.46934509277344px;
            width: 9px;
            height: 12px;
            position: absolute;
          }
          .home-vector0108 {
            top: 229.98306274414062px;
            left: 53.83790588378906px;
            width: 28px;
            height: 32px;
            position: absolute;
          }
          .home-vector0109 {
            top: 217.5740966796875px;
            left: 57.89935302734375px;
            width: 16px;
            height: 13px;
            position: absolute;
          }
          .home-vector0110 {
            top: 198.861083984375px;
            left: 25.008926391601562px;
            width: 39px;
            height: 19px;
            position: absolute;
          }
          .home-vector0111 {
            top: 189.53408813476562px;
            left: 36.37934875488281px;
            width: 24px;
            height: 2px;
            position: absolute;
          }
          .home-vector0112 {
            top: 166.86985778808594px;
            left: 12.359344482421875px;
            width: 44px;
            height: 1px;
            position: absolute;
          }
          .home-vector0113 {
            top: 141.02593994140625px;
            left: 29.939163208007812px;
            width: 29px;
            height: 8px;
            position: absolute;
          }
          .home-vector0114 {
            top: 112.35409545898438px;
            left: 20.52880859375px;
            width: 42px;
            height: 21px;
            position: absolute;
          }
          .home-vector0115 {
            top: 101.50103759765625px;
            left: 50.01814270019531px;
            width: 22px;
            height: 16px;
            position: absolute;
          }
          .home-vector0116 {
            top: 68.64408874511719px;
            left: 52.427459716796875px;
            width: 34px;
            height: 30px;
            position: absolute;
          }
          .home-vector0117 {
            top: 69.55409240722656px;
            left: 83.61935424804688px;
            width: 14px;
            height: 20px;
            position: absolute;
          }
          .home-group13 {
            top: 51.8040885925293px;
            left: 43.64935302734375px;
            width: 54.31999206542969px;
            height: 47.33000183105469px;
            display: flex;
            opacity: 0.2;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0118 {
            top: 0px;
            left: 0px;
            width: 54px;
            height: 47px;
            position: absolute;
          }
          .home-group14 {
            top: 27.992679595947266px;
            left: 92.079345703125px;
            width: 34.82000732421875px;
            height: 54.00141525268555px;
            display: flex;
            opacity: 0.2;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0119 {
            top: 0px;
            left: 0px;
            width: 35px;
            height: 54px;
            position: absolute;
          }
          .home-group15 {
            top: 17.67551040649414px;
            left: 148.7193603515625px;
            width: 27.029998779296875px;
            height: 58.36857986450195px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0120 {
            top: 0px;
            left: 0px;
            width: 27px;
            height: 58px;
            position: absolute;
          }
          .home-group16 {
            top: 28.604084014892578px;
            left: 183.08935546875px;
            width: 40.509979248046875px;
            height: 58.720008850097656px;
            display: flex;
            opacity: 0.2;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0121 {
            top: 0px;
            left: 0px;
            width: 41px;
            height: 59px;
            position: absolute;
          }
          .home-group17 {
            top: 61.814083099365234px;
            left: 214.4593505859375px;
            width: 47.17999267578125px;
            height: 52.80999755859375px;
            display: flex;
            opacity: 0.2;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0122 {
            top: 0px;
            left: 0px;
            width: 47px;
            height: 53px;
            position: absolute;
          }
          .home-group18 {
            top: 108.0740966796875px;
            left: 231.86935424804688px;
            width: 54.26668167114258px;
            height: 35.31999206542969px;
            display: flex;
            opacity: 0.2;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0123 {
            top: 0px;
            left: 0px;
            width: 54px;
            height: 35px;
            position: absolute;
          }
          .home-group19 {
            top: 165.7640838623047px;
            left: 238.33935546875px;
            width: 58.209991455078125px;
            height: 27.610000610351562px;
            display: flex;
            opacity: 0.2;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0124 {
            top: 0px;
            left: 0px;
            width: 58px;
            height: 28px;
            position: absolute;
          }
          .home-group20 {
            top: 199.63409423828125px;
            left: 227.37933349609375px;
            width: 58.52001953125px;
            height: 40.220001220703125px;
            display: flex;
            opacity: 0.2;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0125 {
            top: 0px;
            left: 0px;
            width: 59px;
            height: 40px;
            position: absolute;
          }
          .home-group21 {
            top: 88.76408386230469px;
            left: 0.27935028076171875px;
            width: 250.97998046875px;
            height: 225.0600128173828px;
            display: flex;
            opacity: 0.2;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0126 {
            top: 130.75999450683594px;
            left: 194.28997802734375px;
            width: 57px;
            height: 60px;
            position: absolute;
          }
          .home-vector0127 {
            top: 151.63999938964844px;
            left: 163.62997436523438px;
            width: 44px;
            height: 63px;
            position: absolute;
          }
          .home-vector0128 {
            top: 151.0900115966797px;
            left: 120.90999603271484px;
            width: 30px;
            height: 74px;
            position: absolute;
          }
          .home-vector0129 {
            top: 143.5699920654297px;
            left: 70.52999114990234px;
            width: 53px;
            height: 71px;
            position: absolute;
          }
          .home-vector0130 {
            top: 119.37001037597656px;
            left: 33.81999969482422px;
            width: 60px;
            height: 64px;
            position: absolute;
          }
          .home-vector0131 {
            top: 95.8800048828125px;
            left: 10.331748962402344px;
            width: 65px;
            height: 39px;
            position: absolute;
          }
          .home-vector0132 {
            top: 48.93000793457031px;
            left: 0px;
            width: 68px;
            height: 30px;
            position: absolute;
          }
          .home-vector0133 {
            top: 0px;
            left: 11.459999084472656px;
            width: 69px;
            height: 52px;
            position: absolute;
          }
          .home-vector0134 {
            top: 17.529674530029297px;
            left: 0px;
            width: 296px;
            height: 296px;
            position: absolute;
          }
          .home-vector0135 {
            top: 303.2237854003906px;
            left: 103.55548095703125px;
            width: 17px;
            height: 67px;
            position: absolute;
          }
          .home-vector0136 {
            top: 74.98408508300781px;
            left: 57.58934020996094px;
            width: 182px;
            height: 182px;
            position: absolute;
          }
          .home-vector0137 {
            top: 100.12408447265625px;
            left: 83.55403137207031px;
            width: 134px;
            height: 156px;
            position: absolute;
          }
          .home-vector0138 {
            top: 13.520565032958984px;
            left: 160.4920654296875px;
            width: 12px;
            height: 56px;
            position: absolute;
          }
          .home-vector0139 {
            top: 2.5555686950683594px;
            left: 98.86868286132812px;
            width: 72px;
            height: 126px;
            position: absolute;
          }
          .home-vector0140 {
            top: 96.8240966796875px;
            left: 123.17935180664062px;
            width: 25px;
            height: 18px;
            position: absolute;
          }
          .home-vector0141 {
            top: 52.92594528198242px;
            left: 110.06562805175781px;
            width: 6px;
            height: 5px;
            position: absolute;
          }
          .home-vector0142 {
            top: 43.99593734741211px;
            left: 103.82820129394531px;
            width: 11px;
            height: 4px;
            position: absolute;
          }
          .home-vector0143 {
            top: 50.676021575927734px;
            left: 136.45614624023438px;
            width: 6px;
            height: 5px;
            position: absolute;
          }
          .home-vector0144 {
            top: 42.12411117553711px;
            left: 133.22314453125px;
            width: 11px;
            height: 4px;
            position: absolute;
          }
          .home-vector0145 {
            top: 44.75321578979492px;
            left: 117.15473937988281px;
            width: 8px;
            height: 26px;
            position: absolute;
          }
          .home-vector0146 {
            top: 70.88259887695312px;
            left: 125.30934143066406px;
            width: 9px;
            height: 9px;
            position: absolute;
          }
          .home-vector0147 {
            top: 30.63199234008789px;
            left: 132.13922119140625px;
            width: 14px;
            height: 3px;
            position: absolute;
          }
          .home-vector0148 {
            top: 33.78719711303711px;
            left: 103.96736145019531px;
            width: 10px;
            height: 4px;
            position: absolute;
          }
          .home-vector0149 {
            top: 52.19765090942383px;
            left: 166.1993408203125px;
            width: 14px;
            height: 21px;
            position: absolute;
          }
          .home-vector0150 {
            top: 56.40102005004883px;
            left: 171.15066528320312px;
            width: 6px;
            height: 12px;
            position: absolute;
          }
          .home-vector0151 {
            top: 0px;
            left: 105.61250305175781px;
            width: 66px;
            height: 64px;
            position: absolute;
          }
          .home-vector0152 {
            top: 134.30409240722656px;
            left: 65.72933959960938px;
            width: 27px;
            height: 97px;
            position: absolute;
          }
          .home-group22 {
            top: 164.22409057617188px;
            left: 174.59933471679688px;
            width: 42.480010986328125px;
            height: 35.435298919677734px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0153 {
            top: 0px;
            left: 0px;
            width: 42px;
            height: 35px;
            position: absolute;
          }
          .home-vector0154 {
            top: 119.28408813476562px;
            left: 191.99935913085938px;
            width: 47px;
            height: 78px;
            position: absolute;
          }
          .home-vector0155 {
            top: 119.24409484863281px;
            left: 191.87933349609375px;
            width: 48px;
            height: 78px;
            position: absolute;
          }
          .home-vector0156 {
            top: 151.694091796875px;
            left: 206.36935424804688px;
            width: 22px;
            height: 18px;
            position: absolute;
          }
          .home-vector0157 {
            top: 145.36505126953125px;
            left: 208.85934448242188px;
            width: 27px;
            height: 12px;
            position: absolute;
          }
          .home-vector0158 {
            top: 141.41940307617188px;
            left: 208.92935180664062px;
            width: 16px;
            height: 2px;
            position: absolute;
          }
          .home-vector0159 {
            top: 122.72409057617188px;
            left: 202.021240234375px;
            width: 2px;
            height: 21px;
            position: absolute;
          }
          .home-vector0160 {
            top: 97.0740966796875px;
            left: 169.318359375px;
            width: 39px;
            height: 85px;
            position: absolute;
          }
          .home-vector0161 {
            top: 127.05409240722656px;
            left: 174.09933471679688px;
            width: 14px;
            height: 8px;
            position: absolute;
          }
          .home-vector0162 {
            top: 143.22409057617188px;
            left: 173.41934204101562px;
            width: 20px;
            height: 8px;
            position: absolute;
          }
          .home-vector0163 {
            top: 138.07049560546875px;
            left: 196.2884521484375px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector0164 {
            top: 157.37408447265625px;
            left: 174.79934692382812px;
            width: 21px;
            height: 4px;
            position: absolute;
          }
          .home-vector0165 {
            top: 145.9496307373047px;
            left: 201.4593505859375px;
            width: 3px;
            height: 10px;
            position: absolute;
          }
          .home-vector0166 {
            top: 171.80409240722656px;
            left: 178.89935302734375px;
            width: 18px;
            height: 1px;
            position: absolute;
          }
          .home-vector0167 {
            top: 114.63409423828125px;
            left: 176.64559936523438px;
            width: 7px;
            height: 2px;
            position: absolute;
          }
          .home-vector0168 {
            top: 156.79409790039062px;
            left: 201.43844604492188px;
            width: 3px;
            height: 18px;
            position: absolute;
          }
          .home-vector0169 {
            top: 163.0740966796875px;
            left: 197.96786499023438px;
            width: 10px;
            height: 21px;
            position: absolute;
          }
          .home-vector0170 {
            top: 121.73408508300781px;
            left: 114.17935180664062px;
            width: 17px;
            height: 13px;
            position: absolute;
          }
          .home-vector0171 {
            top: 121.33135986328125px;
            left: 133.93934631347656px;
            width: 40px;
            height: 16px;
            position: absolute;
          }
          .home-vector0172 {
            top: 161.10409545898438px;
            left: 83.83920288085938px;
            width: 2px;
            height: 69px;
            position: absolute;
          }
          .home-vector0173 {
            top: 138.8940887451172px;
            left: 129.45423889160156px;
            width: 5px;
            height: 113px;
            position: absolute;
          }
          .home-vector0174 {
            top: 79.71409606933594px;
            left: 57.41520690917969px;
            width: 182px;
            height: 177px;
            position: absolute;
          }
          .home-questionspana1 {
            top: 2803px;
            left: 171px;
            width: 500px;
            height: 500px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-freepikbackgroundcompleteinject11 {
            top: 40.68588638305664px;
            left: 46.73227310180664px;
            width: 419.63726806640625px;
            height: 422.01422119140625px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0175 {
            top: 305.64129638671875px;
            left: 204.42620849609375px;
            width: 80px;
            height: 116px;
            position: absolute;
          }
          .home-vector0176 {
            top: 307.46319580078125px;
            left: 234.437744140625px;
            width: 40px;
            height: 102px;
            position: absolute;
          }
          .home-vector0177 {
            top: 331.02410888671875px;
            left: 234.35772705078125px;
            width: 10px;
            height: 32px;
            position: absolute;
          }
          .home-vector0178 {
            top: 349.4441223144531px;
            left: 244.24774169921875px;
            width: 37px;
            height: 14px;
            position: absolute;
          }
          .home-vector0179 {
            top: 362.8341064453125px;
            left: 207.177734375px;
            width: 28px;
            height: 46px;
            position: absolute;
          }
          .home-vector0180 {
            top: 383.4941101074219px;
            left: 234.74774169921875px;
            width: 48px;
            height: 25px;
            position: absolute;
          }
          .home-vector0181 {
            top: 206.4912567138672px;
            left: 90.79965209960938px;
            width: 110px;
            height: 207px;
            position: absolute;
          }
          .home-vector0182 {
            top: 230.04412841796875px;
            left: 112.62773132324219px;
            width: 49px;
            height: 188px;
            position: absolute;
          }
          .home-vector0183 {
            top: 286.5741271972656px;
            left: 105.53773498535156px;
            width: 27px;
            height: 19px;
            position: absolute;
          }
          .home-vector0184 {
            top: 272.4234313964844px;
            left: 133.98495483398438px;
            width: 20px;
            height: 32px;
            position: absolute;
          }
          .home-vector0185 {
            top: 326.5141296386719px;
            left: 143.56773376464844px;
            width: 24px;
            height: 23px;
            position: absolute;
          }
          .home-vector0186 {
            top: 339.2041320800781px;
            left: 114.31773376464844px;
            width: 29px;
            height: 10px;
            position: absolute;
          }
          .home-vector0187 {
            top: 380.2541198730469px;
            left: 117.69772338867188px;
            width: 38px;
            height: 12px;
            position: absolute;
          }
          .home-vector0188 {
            top: 362.0141296386719px;
            left: 154.5077362060547px;
            width: 30px;
            height: 30px;
            position: absolute;
          }
          .home-vector0189 {
            top: 13.724113464355469px;
            left: 17.332996368408203px;
            width: 38px;
            height: 52px;
            position: absolute;
          }
          .home-vector0190 {
            top: 12.201309204101562px;
            left: 52.70917892456055px;
            width: 10px;
            height: 10px;
            position: absolute;
          }
          .home-vector0191 {
            top: 17.28900146484375px;
            left: 81.61354064941406px;
            width: 15px;
            height: 20px;
            position: absolute;
          }
          .home-vector0192 {
            top: 38.95450973510742px;
            left: 91.88143920898438px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0193 {
            top: 122.80485534667969px;
            left: 404.8077392578125px;
            width: 15px;
            height: 20px;
            position: absolute;
          }
          .home-vector0194 {
            top: 143.47877502441406px;
            left: 405.0680236816406px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0195 {
            top: 149.4843292236328px;
            left: 0px;
            width: 33px;
            height: 43px;
            position: absolute;
          }
          .home-vector0196 {
            top: 196.20419311523438px;
            left: 23.691638946533203px;
            width: 9px;
            height: 8px;
            position: absolute;
          }
          .home-vector0197 {
            top: 187.0541229248047px;
            left: 385.9013977050781px;
            width: 23px;
            height: 30px;
            position: absolute;
          }
          .home-vector0198 {
            top: 184.40818786621094px;
            left: 392.23199462890625px;
            width: 6px;
            height: 6px;
            position: absolute;
          }
          .home-freepik-floorinject11 {
            top: 463.510009765625px;
            left: 29.229999542236328px;
            width: 441.53997802734375px;
            height: 0.519989013671875px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0199 {
            top: 0px;
            left: 0px;
            width: 442px;
            height: 1px;
            position: absolute;
          }
          .home-freepik-plantinject11 {
            top: 289.9800109863281px;
            left: 54.182899475097656px;
            width: 87.47569274902344px;
            height: 174.1253204345703px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0200 {
            top: 73.94000244140625px;
            left: 0px;
            width: 46px;
            height: 100px;
            position: absolute;
          }
          .home-group23 {
            top: 73.94000244140625px;
            left: 0px;
            width: 46.09709930419922px;
            height: 99.8499755859375px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0201 {
            top: 0px;
            left: 0px;
            width: 46px;
            height: 100px;
            position: absolute;
          }
          .home-vector0202 {
            top: 35.42999267578125px;
            left: 42.804229736328125px;
            width: 45px;
            height: 139px;
            position: absolute;
          }
          .home-vector0203 {
            top: 42.1199951171875px;
            left: 48.3988037109375px;
            width: 35px;
            height: 132px;
            position: absolute;
          }
          .home-vector0204 {
            top: 0px;
            left: 9.896102905273438px;
            width: 48px;
            height: 174px;
            position: absolute;
          }
          .home-vector0205 {
            top: 7.69000244140625px;
            left: 14.616867065429688px;
            width: 36px;
            height: 166px;
            position: absolute;
          }
          .home-freepikspeechbubbleinject11 {
            top: 54.09600067138672px;
            left: 384.7232971191406px;
            width: 58.56669998168945px;
            height: 58.71424865722656px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0206 {
            top: 22.143997192382812px;
            left: 21.835540771484375px;
            width: 15px;
            height: 20px;
            position: absolute;
          }
          .home-vector0207 {
            top: 20.323997497558594px;
            left: 31.30670166015625px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0208 {
            top: 0px;
            left: 0px;
            width: 59px;
            height: 59px;
            position: absolute;
          }
          .home-freepikquestionmarkinject11 {
            top: 93.0774154663086px;
            left: 121.12954711914062px;
            width: 240.24044799804688px;
            height: 370.69256591796875px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0209 {
            top: 0px;
            left: 23.927749633789062px;
            width: 216px;
            height: 290px;
            position: absolute;
          }
          .home-vector0210 {
            top: 316.5625915527344px;
            left: 102.88044738769531px;
            width: 58px;
            height: 54px;
            position: absolute;
          }
          .home-vector0211 {
            top: 316.5625915527344px;
            left: 102.88044738769531px;
            width: 58px;
            height: 54px;
            opacity: 0.1;
            position: absolute;
          }
          .home-vector0212 {
            top: 0px;
            left: 23.927749633789062px;
            width: 216px;
            height: 290px;
            opacity: 0.1;
            position: absolute;
          }
          .home-vector0213 {
            top: 0.402587890625px;
            left: 0px;
            width: 216px;
            height: 289px;
            position: absolute;
          }
          .home-vector0214 {
            top: 0.402587890625px;
            left: 0px;
            width: 216px;
            height: 289px;
            opacity: 0.3;
            position: absolute;
          }
          .home-vector0215 {
            top: 316.5625915527344px;
            left: 78.96044921875px;
            width: 58px;
            height: 54px;
            position: absolute;
          }
          .home-vector0216 {
            top: 316.5625915527344px;
            left: 78.96044921875px;
            width: 58px;
            height: 54px;
            opacity: 0.3;
            position: absolute;
          }
          .home-vector0217 {
            top: 58.57923126220703px;
            left: 57.43107604980469px;
            width: 57px;
            height: 49px;
            position: absolute;
          }
          .home-vector0218 {
            top: 0.5713348388671875px;
            left: 104.15045166015625px;
            width: 98px;
            height: 48px;
            position: absolute;
          }
          .home-vector0219 {
            top: 172.92257690429688px;
            left: 136.44046020507812px;
            width: 59px;
            height: 41px;
            position: absolute;
          }
          .home-vector0220 {
            top: 213.45257568359375px;
            left: 134.950439453125px;
            width: 1px;
            height: 72px;
            position: absolute;
          }
          .home-vector0221 {
            top: 316.6725769042969px;
            left: 137.16046142578125px;
            width: 1px;
            height: 50px;
            position: absolute;
          }
          .home-freepik-characterinject11 {
            top: 71.93250274658203px;
            left: 310.7401123046875px;
            width: 111.27058410644531px;
            height: 391.1875px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0222 {
            top: 111.26749420166016px;
            left: 4.492950439453125px;
            width: 28px;
            height: 15px;
            position: absolute;
          }
          .home-group24 {
            top: 111.26749420166016px;
            left: 4.492950439453125px;
            width: 28.28693199157715px;
            height: 15.365618705749512px;
            display: flex;
            opacity: 0.4;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0223 {
            top: 0px;
            left: 0px;
            width: 28px;
            height: 15px;
            position: absolute;
          }
          .home-vector0224 {
            top: 108.42940521240234px;
            left: 69.85989379882812px;
            width: 26px;
            height: 11px;
            position: absolute;
          }
          .home-group25 {
            top: 108.44341278076172px;
            left: 69.85989379882812px;
            width: 25.797117233276367px;
            height: 11.12869644165039px;
            display: flex;
            opacity: 0.4;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0225 {
            top: 0px;
            left: 0px;
            width: 26px;
            height: 11px;
            position: absolute;
          }
          .home-vector0226 {
            top: 64.06749725341797px;
            left: 0px;
            width: 76px;
            height: 88px;
            position: absolute;
          }
          .home-group26 {
            top: 94.9074935913086px;
            left: 40.1343994140625px;
            width: 7.408265113830566px;
            height: 26.93752098083496px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0227 {
            top: 0px;
            left: 0px;
            width: 7px;
            height: 27px;
            position: absolute;
          }
          .home-group27 {
            top: 134.08615112304688px;
            left: 27.6298828125px;
            width: 42.30999755859375px;
            height: 6.747124671936035px;
            display: flex;
            opacity: 0.4;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0228 {
            top: 0px;
            left: 0px;
            width: 42px;
            height: 7px;
            position: absolute;
          }
          .home-vector0229 {
            top: 74.25749969482422px;
            left: 64.66989135742188px;
            width: 31px;
            height: 41px;
            position: absolute;
          }
          .home-vector0230 {
            top: 91.8274917602539px;
            left: 24.2498779296875px;
            width: 3px;
            height: 12px;
            position: absolute;
          }
          .home-vector0231 {
            top: 86.3375015258789px;
            left: 63.82672119140625px;
            width: 9px;
            height: 31px;
            position: absolute;
          }
          .home-vector0232 {
            top: 140.97457885742188px;
            left: 27.529876708984375px;
            width: 26px;
            height: 9px;
            position: absolute;
          }
          .home-vector0233 {
            top: 143.38751220703125px;
            left: 65.8385009765625px;
            width: 4px;
            height: 9px;
            position: absolute;
          }
          .home-vector0234 {
            top: 146.90750122070312px;
            left: 64.18093872070312px;
            width: 2px;
            height: 6px;
            position: absolute;
          }
          .home-vector0235 {
            top: 114.00749969482422px;
            left: 53.8798828125px;
            width: 4px;
            height: 5px;
            position: absolute;
          }
          .home-vector0236 {
            top: 83.47576141357422px;
            left: 6.539886474609375px;
            width: 17px;
            height: 6px;
            position: absolute;
          }
          .home-vector0237 {
            top: 73.92749786376953px;
            left: 66.98989868164062px;
            width: 9px;
            height: 11px;
            position: absolute;
          }
          .home-vector0238 {
            top: 65.68749237060547px;
            left: 26.248779296875px;
            width: 30px;
            height: 17px;
            position: absolute;
          }
          .home-group28 {
            top: 114.33052825927734px;
            left: 53.8798828125px;
            width: 4.899993896484375px;
            height: 4.9769744873046875px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0239 {
            top: 0px;
            left: 0px;
            width: 5px;
            height: 5px;
            position: absolute;
          }
          .home-group29 {
            top: 97.86750030517578px;
            left: 71.40988159179688px;
            width: 3.603376865386963px;
            height: 15.569992065429688px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0240 {
            top: 0px;
            left: 0px;
            width: 4px;
            height: 16px;
            position: absolute;
          }
          .home-vector0241 {
            top: 335.9175109863281px;
            left: 39.619873046875px;
            width: 26px;
            height: 47px;
            position: absolute;
          }
          .home-vector0242 {
            top: 376.4075012207031px;
            left: 41.2598876953125px;
            width: 44px;
            height: 15px;
            position: absolute;
          }
          .home-vector0243 {
            top: 381.00714111328125px;
            left: 45.105072021484375px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector0244 {
            top: 387.447509765625px;
            left: 41.2598876953125px;
            width: 44px;
            height: 4px;
            position: absolute;
          }
          .home-vector0245 {
            top: 378.09356689453125px;
            left: 58.909454345703125px;
            width: 4px;
            height: 3px;
            position: absolute;
          }
          .home-vector0246 {
            top: 380.1556091308594px;
            left: 64.54446411132812px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector0247 {
            top: 382.0418395996094px;
            left: 69.78424072265625px;
            width: 2px;
            height: 4px;
            position: absolute;
          }
          .home-vector0248 {
            top: 0px;
            left: 17.72113037109375px;
            width: 53px;
            height: 50px;
            position: absolute;
          }
          .home-vector0249 {
            top: 9.651313781738281px;
            left: 19.291046142578125px;
            width: 39px;
            height: 68px;
            position: absolute;
          }
          .home-vector0250 {
            top: 27.744277954101562px;
            left: 51.535186767578125px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector0251 {
            top: 25.70502471923828px;
            left: 47.861602783203125px;
            width: 6px;
            height: 2px;
            position: absolute;
          }
          .home-vector0252 {
            top: 31.064041137695312px;
            left: 37.014923095703125px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector0253 {
            top: 29.23552703857422px;
            left: 33.481597900390625px;
            width: 6px;
            height: 2px;
            position: absolute;
          }
          .home-vector0254 {
            top: 27.37628173828125px;
            left: 43.2513427734375px;
            width: 7px;
            height: 12px;
            position: absolute;
          }
          .home-vector0255 {
            top: 56.147499084472656px;
            left: 36.0198974609375px;
            width: 16px;
            height: 4px;
            position: absolute;
          }
          .home-vector0256 {
            top: 27.288963317871094px;
            left: 32.456207275390625px;
            width: 7px;
            height: 2px;
            position: absolute;
          }
          .home-vector0257 {
            top: 20.87470245361328px;
            left: 46.75909423828125px;
            width: 6px;
            height: 2px;
            position: absolute;
          }
          .home-vector0258 {
            top: 7.1210479736328125px;
            left: 25.39990234375px;
            width: 37px;
            height: 17px;
            position: absolute;
          }
          .home-vector0259 {
            top: 10.192863464355469px;
            left: 10.498809814453125px;
            width: 26px;
            height: 45px;
            position: absolute;
          }
          .home-vector0260 {
            top: 37.162139892578125px;
            left: 19.56689453125px;
            width: 8px;
            height: 10px;
            position: absolute;
          }
          .home-vector0261 {
            top: 39.143280029296875px;
            left: 21.367645263671875px;
            width: 4px;
            height: 6px;
            position: absolute;
          }
          .home-vector0262 {
            top: 11.262496948242188px;
            left: 29.436859130859375px;
            width: 35px;
            height: 19px;
            position: absolute;
          }
          .home-vector0263 {
            top: 4.2328033447265625px;
            left: 30.29925537109375px;
            width: 29px;
            height: 5px;
            position: absolute;
          }
          .home-vector0264 {
            top: 42.04449462890625px;
            left: 42.3260498046875px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0265 {
            top: 42.963287353515625px;
            left: 41.947296142578125px;
            width: 5px;
            height: 3px;
            position: absolute;
          }
          .home-vector0266 {
            top: 45.425453186035156px;
            left: 22.175994873046875px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0267 {
            top: 44.646217346191406px;
            left: 20.397247314453125px;
            width: 2px;
            height: 3px;
            position: absolute;
          }
          .home-vector0268 {
            top: 108.85749053955078px;
            left: 33.599884033203125px;
            width: 59px;
            height: 28px;
            position: absolute;
          }
          .home-vector0269 {
            top: 117.48192596435547px;
            left: 73.28988647460938px;
            width: 9px;
            height: 6px;
            position: absolute;
          }
          .home-vector0270 {
            top: 77.94750213623047px;
            left: 11.31988525390625px;
            width: 37px;
            height: 62px;
            position: absolute;
          }
          .home-vector0271 {
            top: 51.956092834472656px;
            left: 32.382598876953125px;
            width: 24px;
            height: 35px;
            position: absolute;
          }
          .home-vector0272 {
            top: 51.87458801269531px;
            left: 22.2598876953125px;
            width: 34px;
            height: 89px;
            position: absolute;
          }
          .home-vector0273 {
            top: 65.12683868408203px;
            left: 43.961181640625px;
            width: 5px;
            height: 2px;
            position: absolute;
          }
          .home-vector0274 {
            top: 64.3206558227539px;
            left: 46.158599853515625px;
            width: 1px;
            height: 1px;
            position: absolute;
          }
          .home-vector0275 {
            top: 68.95270538330078px;
            left: 48.749114990234375px;
            width: 5px;
            height: 2px;
            position: absolute;
          }
          .home-vector0276 {
            top: 72.75739288330078px;
            left: 52.830322265625px;
            width: 1px;
            height: 3px;
            position: absolute;
          }
          .home-vector0277 {
            top: 93.9340591430664px;
            left: 57.32989501953125px;
            width: 7px;
            height: 6px;
            position: absolute;
          }
          .home-vector0278 {
            top: 99.13750457763672px;
            left: 57.539886474609375px;
            width: 7px;
            height: 2px;
            position: absolute;
          }
          .home-vector0279 {
            top: 82.06749725341797px;
            left: 2.543365478515625px;
            width: 4px;
            height: 37px;
            position: absolute;
          }
          .home-vector0280 {
            top: 68.44562530517578px;
            left: 5.2598876953125px;
            width: 21px;
            height: 14px;
            position: absolute;
          }
          .home-vector0281 {
            top: 66.8274917602539px;
            left: 55.44989013671875px;
            width: 19px;
            height: 8px;
            position: absolute;
          }
          .home-vector0282 {
            top: 142.716796875px;
            left: 22.881744384765625px;
            width: 4px;
            height: 9px;
            position: absolute;
          }
          .home-vector0283 {
            top: 140.45748901367188px;
            left: 23.409881591796875px;
            width: 1px;
            height: 3px;
            position: absolute;
          }
          .home-vector0284 {
            top: 151.26748657226562px;
            left: 12.073028564453125px;
            width: 55px;
            height: 213px;
            position: absolute;
          }
          .home-vector0285 {
            top: 151.84750366210938px;
            left: 44.1298828125px;
            width: 67px;
            height: 203px;
            position: absolute;
          }
          .home-vector0286 {
            top: 182.53750610351562px;
            left: 63.80987548828125px;
            width: 4px;
            height: 182px;
            position: absolute;
          }
          .home-vector0287 {
            top: 153.72750854492188px;
            left: 63.039825439453125px;
            width: 1px;
            height: 26px;
            position: absolute;
          }
          .home-vector0288 {
            top: 155.52899169921875px;
            left: 55.2459716796875px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0289 {
            top: 153.97750854492188px;
            left: 24.349884033203125px;
            width: 16px;
            height: 13px;
            position: absolute;
          }
          .home-vector0290 {
            top: 153.89749145507812px;
            left: 71.45175170898438px;
            width: 8px;
            height: 9px;
            position: absolute;
          }
          .home-vector0291 {
            top: 258.24749755859375px;
            left: 78.90988159179688px;
            width: 13px;
            height: 6px;
            position: absolute;
          }
          .home-vector0292 {
            top: 258.7774963378906px;
            left: 77.93988037109375px;
            width: 6px;
            height: 8px;
            position: absolute;
          }
          .home-vector0293 {
            top: 183.293212890625px;
            left: 31.4298095703125px;
            width: 1px;
            height: 3px;
            position: absolute;
          }
          .home-vector0294 {
            top: 186.63751220703125px;
            left: 51.68988037109375px;
            width: 1px;
            height: 2px;
            position: absolute;
          }
          .home-vector0295 {
            top: 196.59738159179688px;
            left: 43.621307373046875px;
            width: 1px;
            height: 3px;
            position: absolute;
          }
          .home-vector0296 {
            top: 205.53463745117188px;
            left: 27.3798828125px;
            width: 2px;
            height: 2px;
            position: absolute;
          }
          .home-vector0297 {
            top: 215.1739501953125px;
            left: 55.034576416015625px;
            width: 1px;
            height: 2px;
            position: absolute;
          }
          .home-vector0298 {
            top: 215.95751953125px;
            left: 38.9998779296875px;
            width: 1px;
            height: 4px;
            position: absolute;
          }
          .home-vector0299 {
            top: 229.3565673828125px;
            left: 32.026947021484375px;
            width: 2px;
            height: 2px;
            position: absolute;
          }
          .home-vector0300 {
            top: 234.69613647460938px;
            left: 48.432830810546875px;
            width: 2px;
            height: 1px;
            position: absolute;
          }
          .home-vector0301 {
            top: 249.32913208007812px;
            left: 37.3902587890625px;
            width: 2px;
            height: 4px;
            position: absolute;
          }
          .home-vector0302 {
            top: 248.59158325195312px;
            left: 56.89349365234375px;
            width: 2px;
            height: 3px;
            position: absolute;
          }
          .home-vector0303 {
            top: 263.3427429199219px;
            left: 48.58770751953125px;
            width: 1px;
            height: 4px;
            position: absolute;
          }
          .home-vector0304 {
            top: 273.6614990234375px;
            left: 39.01873779296875px;
            width: 2px;
            height: 2px;
            position: absolute;
          }
          .home-vector0305 {
            top: 277.001220703125px;
            left: 61.003570556640625px;
            width: 2px;
            height: 2px;
            position: absolute;
          }
          .home-vector0306 {
            top: 288.98712158203125px;
            left: 49.334869384765625px;
            width: 1px;
            height: 3px;
            position: absolute;
          }
          .home-vector0307 {
            top: 296.17108154296875px;
            left: 40.087371826171875px;
            width: 2px;
            height: 3px;
            position: absolute;
          }
          .home-vector0308 {
            top: 306.83538818359375px;
            left: 57.829742431640625px;
            width: 3px;
            height: 2px;
            position: absolute;
          }
          .home-vector0309 {
            top: 313.6971740722656px;
            left: 44.72161865234375px;
            width: 1px;
            height: 4px;
            position: absolute;
          }
          .home-vector0310 {
            top: 330.64306640625px;
            left: 49.522491455078125px;
            width: 2px;
            height: 2px;
            position: absolute;
          }
          .home-vector0311 {
            top: 339.69024658203125px;
            left: 42.14971923828125px;
            width: 2px;
            height: 3px;
            position: absolute;
          }
          .home-vector0312 {
            top: 328.4420471191406px;
            left: 62.916107177734375px;
            width: 1px;
            height: 1px;
            position: absolute;
          }
          .home-vector0313 {
            top: 350.7474060058594px;
            left: 54.67401123046875px;
            width: 1px;
            height: 3px;
            position: absolute;
          }
          .home-vector0314 {
            top: 197.50155639648438px;
            left: 59.105133056640625px;
            width: 1px;
            height: 2px;
            position: absolute;
          }
          .home-vector0315 {
            top: 168.364990234375px;
            left: 43.472869873046875px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector0316 {
            top: 165.46343994140625px;
            left: 57.277862548828125px;
            width: 1px;
            height: 3px;
            position: absolute;
          }
          .home-vector0317 {
            top: 175.40328979492188px;
            left: 20.039794921875px;
            width: 1px;
            height: 3px;
            position: absolute;
          }
          .home-vector0318 {
            top: 191.41281127929688px;
            left: 19.113800048828125px;
            width: 2px;
            height: 2px;
            position: absolute;
          }
          .home-vector0319 {
            top: 154.5675048828125px;
            left: 45.791046142578125px;
            width: 1px;
            height: 2px;
            position: absolute;
          }
          .home-vector0320 {
            top: 161.19635009765625px;
            left: 70.6885986328125px;
            width: 1px;
            height: 3px;
            position: absolute;
          }
          .home-vector0321 {
            top: 172.06478881835938px;
            left: 76.42770385742188px;
            width: 1px;
            height: 3px;
            position: absolute;
          }
          .home-vector0322 {
            top: 181.10385131835938px;
            left: 70.7264404296875px;
            width: 2px;
            height: 3px;
            position: absolute;
          }
          .home-vector0323 {
            top: 191.24404907226562px;
            left: 81.02810668945312px;
            width: 1px;
            height: 2px;
            position: absolute;
          }
          .home-vector0324 {
            top: 201.1934814453125px;
            left: 72.36685180664062px;
            width: 1px;
            height: 1px;
            position: absolute;
          }
          .home-vector0325 {
            top: 218.71478271484375px;
            left: 72.58334350585938px;
            width: 2px;
            height: 3px;
            position: absolute;
          }
          .home-vector0326 {
            top: 208.01718139648438px;
            left: 83.09011840820312px;
            width: 2px;
            height: 3px;
            position: absolute;
          }
          .home-vector0327 {
            top: 222.24371337890625px;
            left: 90.67355346679688px;
            width: 2px;
            height: 3px;
            position: absolute;
          }
          .home-vector0328 {
            top: 235.277099609375px;
            left: 76.46566772460938px;
            width: 2px;
            height: 2px;
            position: absolute;
          }
          .home-vector0329 {
            top: 249.8074951171875px;
            left: 77.39990234375px;
            width: 2px;
            height: 1px;
            position: absolute;
          }
          .home-vector0330 {
            top: 243.61740112304688px;
            left: 91.74484252929688px;
            width: 1px;
            height: 3px;
            position: absolute;
          }
          .home-vector0331 {
            top: 247.47586059570312px;
            left: 102.66314697265625px;
            width: 1px;
            height: 3px;
            position: absolute;
          }
          .home-vector0332 {
            top: 264.4628601074219px;
            left: 101.9140625px;
            width: 2px;
            height: 4px;
            position: absolute;
          }
          .home-vector0333 {
            top: 274.763916015625px;
            left: 89.51388549804688px;
            width: 1px;
            height: 3px;
            position: absolute;
          }
          .home-vector0334 {
            top: 281.7174987792969px;
            left: 76.83987426757812px;
            width: 2px;
            height: 1px;
            position: absolute;
          }
          .home-vector0335 {
            top: 295.306396484375px;
            left: 84.87762451171875px;
            width: 1px;
            height: 3px;
            position: absolute;
          }
          .home-vector0336 {
            top: 290.818603515625px;
            left: 76.79440307617188px;
            width: 1px;
            height: 2px;
            position: absolute;
          }
          .home-vector0337 {
            top: 307.2370910644531px;
            left: 76.1610107421875px;
            width: 1px;
            height: 3px;
            position: absolute;
          }
          .home-mobileloginpana1 {
            top: 3238px;
            left: 769px;
            width: 500px;
            height: 500px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-freepikbackgroundcompleteinject4 {
            top: 34.04999923706055px;
            left: 39.68000030517578px;
            width: 427.21002197265625px;
            height: 368.2300109863281px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0338 {
            top: 187.30999755859375px;
            left: 263.32000732421875px;
            width: 164px;
            height: 95px;
            position: absolute;
          }
          .home-vector0339 {
            top: 237.87998962402344px;
            left: 285.27001953125px;
            width: 108px;
            height: 3px;
            position: absolute;
          }
          .home-vector0340 {
            top: 249.6999969482422px;
            left: 285.27001953125px;
            width: 116px;
            height: 3px;
            position: absolute;
          }
          .home-vector0341 {
            top: 261.6600036621094px;
            left: 285.27001953125px;
            width: 116px;
            height: 3px;
            position: absolute;
          }
          .home-vector0342 {
            top: 220.70999145507812px;
            left: 285.27001953125px;
            width: 38px;
            height: 8px;
            position: absolute;
          }
          .home-vector0343 {
            top: 187.80999755859375px;
            left: 263.8500061035156px;
            width: 163px;
            height: 15px;
            position: absolute;
          }
          .home-vector0344 {
            top: 190.04861450195312px;
            left: 414.16552734375px;
            width: 10px;
            height: 11px;
            position: absolute;
          }
          .home-vector0345 {
            top: 190.04737854003906px;
            left: 414.18548583984375px;
            width: 10px;
            height: 11px;
            position: absolute;
          }
          .home-vector0346 {
            top: 0px;
            left: 62.68000030517578px;
            width: 163px;
            height: 94px;
            position: absolute;
          }
          .home-vector0347 {
            top: 50.07999801635742px;
            left: 84.11000061035156px;
            width: 108px;
            height: 3px;
            position: absolute;
          }
          .home-vector0348 {
            top: 61.89999771118164px;
            left: 84.11000061035156px;
            width: 116px;
            height: 3px;
            position: absolute;
          }
          .home-vector0349 {
            top: 73.86000061035156px;
            left: 84.11000061035156px;
            width: 116px;
            height: 3px;
            position: absolute;
          }
          .home-vector0350 {
            top: 32.90999984741211px;
            left: 84.11000061035156px;
            width: 38px;
            height: 8px;
            position: absolute;
          }
          .home-vector0351 {
            top: 0px;
            left: 62.68000030517578px;
            width: 163px;
            height: 15px;
            position: absolute;
          }
          .home-vector0352 {
            top: 2.17742919921875px;
            left: 212.44552612304688px;
            width: 10px;
            height: 11px;
            position: absolute;
          }
          .home-vector0353 {
            top: 2.177379608154297px;
            left: 212.44546508789062px;
            width: 10px;
            height: 11px;
            position: absolute;
          }
          .home-vector0354 {
            top: 79.49000549316406px;
            left: 0px;
            width: 164px;
            height: 95px;
            position: absolute;
          }
          .home-vector0355 {
            top: 130.0699920654297px;
            left: 21.93000030517578px;
            width: 108px;
            height: 3px;
            position: absolute;
          }
          .home-vector0356 {
            top: 141.88999938964844px;
            left: 21.93000030517578px;
            width: 116px;
            height: 3px;
            position: absolute;
          }
          .home-vector0357 {
            top: 153.84999084472656px;
            left: 21.93000030517578px;
            width: 116px;
            height: 3px;
            position: absolute;
          }
          .home-vector0358 {
            top: 112.89999389648438px;
            left: 21.93000030517578px;
            width: 38px;
            height: 8px;
            position: absolute;
          }
          .home-vector0359 {
            top: 79.99000549316406px;
            left: 0.5px;
            width: 163px;
            height: 15px;
            position: absolute;
          }
          .home-vector0360 {
            top: 196.0699920654297px;
            left: 160.67001342773438px;
            width: 192px;
            height: 172px;
            position: absolute;
          }
          .home-vector0361 {
            top: 141.83999633789062px;
            left: 19.700000762939453px;
            width: 151px;
            height: 157px;
            position: absolute;
          }
          .home-vector0362 {
            top: 141.83999633789062px;
            left: 19.700000762939453px;
            width: 151px;
            height: 17px;
            position: absolute;
          }
          .home-vector0363 {
            top: 146.88999938964844px;
            left: 25.823104858398438px;
            width: 6px;
            height: 6px;
            position: absolute;
          }
          .home-vector0364 {
            top: 146.88998413085938px;
            left: 38.632667541503906px;
            width: 6px;
            height: 6px;
            position: absolute;
          }
          .home-vector0365 {
            top: 146.88998413085938px;
            left: 51.462669372558594px;
            width: 6px;
            height: 6px;
            position: absolute;
          }
          .home-vector0366 {
            top: 34.22999954223633px;
            left: 213.39999389648438px;
            width: 192px;
            height: 192px;
            position: absolute;
          }
          .home-vector0367 {
            top: 34.22999954223633px;
            left: 213.39999389648438px;
            width: 192px;
            height: 22px;
            position: absolute;
          }
          .home-vector0368 {
            top: 40.880001068115234px;
            left: 221.44387817382812px;
            width: 8px;
            height: 8px;
            position: absolute;
          }
          .home-vector0369 {
            top: 40.978763580322266px;
            left: 238.21246337890625px;
            width: 8px;
            height: 8px;
            position: absolute;
          }
          .home-vector0370 {
            top: 40.880001068115234px;
            left: 255.223876953125px;
            width: 8px;
            height: 8px;
            position: absolute;
          }
          .home-freepik-floorinject4 {
            top: 452.8699951171875px;
            left: 93.66999816894531px;
            width: 310.16998291015625px;
            height: 0.52001953125px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0371 {
            top: 0px;
            left: 0px;
            width: 310px;
            height: 1px;
            position: absolute;
          }
          .home-freepik-plantinject4 {
            top: 224.1737823486328px;
            left: 317.7749938964844px;
            width: 83.08634948730469px;
            height: 142.98622131347656px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0372 {
            top: 0px;
            left: 0px;
            width: 83px;
            height: 109px;
            position: absolute;
          }
          .home-vector0373 {
            top: 2.4862213134765625px;
            left: 17.70660400390625px;
            width: 61px;
            height: 140px;
            position: absolute;
          }
          .home-vector0374 {
            top: 18.93621826171875px;
            left: 35.865020751953125px;
            width: 4px;
            height: 33px;
            position: absolute;
          }
          .home-vector0375 {
            top: 44.57850646972656px;
            left: 40.365020751953125px;
            width: 38px;
            height: 7px;
            position: absolute;
          }
          .home-vector0376 {
            top: 45.44621276855469px;
            left: 4.175018310546875px;
            width: 19px;
            height: 49px;
            position: absolute;
          }
          .home-vector0377 {
            top: 78.07621765136719px;
            left: 23.5150146484375px;
            width: 51px;
            height: 16px;
            position: absolute;
          }
          .home-freepik-padlockinject4 {
            top: 38.7194709777832px;
            left: 312.9225158691406px;
            width: 83.2989273071289px;
            height: 99.63090515136719px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0378 {
            top: 0px;
            left: 0px;
            width: 83px;
            height: 100px;
            position: absolute;
          }
          .home-vector0379 {
            top: 22.67697525024414px;
            left: 10.187286376953125px;
            width: 43px;
            height: 16px;
            position: absolute;
          }
          .home-vector0380 {
            top: 24.520530700683594px;
            left: 25.137481689453125px;
            width: 54px;
            height: 71px;
            position: absolute;
          }
          .home-vector0381 {
            top: 8.804702758789062px;
            left: 15.11688232421875px;
            width: 21px;
            height: 27px;
            position: absolute;
          }
          .home-vector0382 {
            top: 48.60787582397461px;
            left: 30.884765625px;
            width: 21px;
            height: 33px;
            position: absolute;
          }
          .home-freepik-deviceinject4 {
            top: 82.92971801757812px;
            left: 197.34982299804688px;
            width: 144.4603271484375px;
            height: 294.3904724121094px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0383 {
            top: 0px;
            left: 0px;
            width: 144px;
            height: 294px;
            position: absolute;
          }
          .home-vector0384 {
            top: 8.730018615722656px;
            left: 6.6500091552734375px;
            width: 131px;
            height: 275px;
            position: absolute;
          }
          .home-vector0385 {
            top: 227.96029663085938px;
            left: 33.74005126953125px;
            width: 77px;
            height: 23px;
            position: absolute;
          }
          .home-text165 {
            top: 233.7213134765625px;
            left: 55.24017333984375px;
            color: rgba(232, 232, 227, 1);
            height: auto;
            position: absolute;
            font-size: 8.13128662109375px;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-vector0386 {
            top: 80.80377197265625px;
            left: 24.184539794921875px;
            width: 26px;
            height: 5px;
            position: absolute;
          }
          .home-vector0387 {
            top: 80.80377197265625px;
            left: 24.184539794921875px;
            width: 26px;
            height: 5px;
            opacity: 0.1;
            position: absolute;
          }
          .home-vector0388 {
            top: 92.2801513671875px;
            left: 23.83587646484375px;
            width: 103px;
            height: 18px;
            position: absolute;
          }
          .home-vector0389 {
            top: 97.92027282714844px;
            left: 31.910186767578125px;
            width: 47px;
            height: 4px;
            position: absolute;
          }
          .home-vector0390 {
            top: 97.92027282714844px;
            left: 31.910186767578125px;
            width: 47px;
            height: 4px;
            opacity: 0.2;
            position: absolute;
          }
          .home-vector0391 {
            top: 123.86250305175781px;
            left: 24.0091552734375px;
            width: 26px;
            height: 5px;
            position: absolute;
          }
          .home-vector0392 {
            top: 123.86250305175781px;
            left: 24.0091552734375px;
            width: 26px;
            height: 5px;
            opacity: 0.1;
            position: absolute;
          }
          .home-vector0393 {
            top: 135.45028686523438px;
            left: 23.604400634765625px;
            width: 103px;
            height: 18px;
            position: absolute;
          }
          .home-vector0394 {
            top: 168.7911834716797px;
            left: 23.815322875976562px;
            width: 26px;
            height: 5px;
            position: absolute;
          }
          .home-vector0395 {
            top: 168.7911834716797px;
            left: 23.815322875976562px;
            width: 26px;
            height: 5px;
            opacity: 0.1;
            position: absolute;
          }
          .home-vector0396 {
            top: 180.23028564453125px;
            left: 23.494400024414062px;
            width: 103px;
            height: 18px;
            position: absolute;
          }
          .home-vector0397 {
            top: 142.01364135742188px;
            left: 30.906494140625px;
            width: 47px;
            height: 4px;
            position: absolute;
          }
          .home-vector0398 {
            top: 142.01364135742188px;
            left: 30.906494140625px;
            width: 47px;
            height: 4px;
            opacity: 0.2;
            position: absolute;
          }
          .home-vector0399 {
            top: 187.49954223632812px;
            left: 31.045700073242188px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0400 {
            top: 187.53683471679688px;
            left: 37.41517639160156px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0401 {
            top: 187.55953979492188px;
            left: 43.79570007324219px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0402 {
            top: 187.58953857421875px;
            left: 50.16569519042969px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0403 {
            top: 187.61953735351562px;
            left: 56.53498840332031px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0404 {
            top: 187.6502685546875px;
            left: 62.914947509765625px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0405 {
            top: 187.67684936523438px;
            left: 69.28518676757812px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0406 {
            top: 187.71029663085938px;
            left: 75.65493774414062px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0407 {
            top: 187.73956298828125px;
            left: 82.02499389648438px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-group30 {
            top: 187.49954223632812px;
            left: 31.045700073242188px;
            width: 55.09576416015625px;
            height: 4.58416748046875px;
            display: flex;
            opacity: 0.2;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0408 {
            top: 0px;
            left: 0px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0409 {
            top: 0.03729248046875px;
            left: 6.369476318359375px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0410 {
            top: 0.05999755859375px;
            left: 12.75px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0411 {
            top: 0.089996337890625px;
            left: 19.1199951171875px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0412 {
            top: 0.1199951171875px;
            left: 25.489288330078125px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0413 {
            top: 0.150726318359375px;
            left: 31.869247436523438px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0414 {
            top: 0.17730712890625px;
            left: 38.23948669433594px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0415 {
            top: 0.21075439453125px;
            left: 44.60923767089844px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0416 {
            top: 0.240020751953125px;
            left: 50.97929382324219px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0417 {
            top: 38.15956115722656px;
            left: 69.0985107421875px;
            width: 13px;
            height: 14px;
            position: absolute;
          }
          .home-vector0418 {
            top: 38.15956115722656px;
            left: 69.0985107421875px;
            width: 13px;
            height: 14px;
            opacity: 0.1;
            position: absolute;
          }
          .home-vector0419 {
            top: 56.307586669921875px;
            left: 51.41517639160156px;
            width: 47px;
            height: 6px;
            position: absolute;
          }
          .home-vector0420 {
            top: 56.307586669921875px;
            left: 51.41517639160156px;
            width: 47px;
            height: 6px;
            opacity: 0.2;
            position: absolute;
          }
          .home-freepikspeechbubbleinject4 {
            top: 168.679931640625px;
            left: 96.74488830566406px;
            width: 51.56861114501953px;
            height: 58.560081481933594px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0421 {
            top: 0px;
            left: 0px;
            width: 52px;
            height: 59px;
            position: absolute;
          }
          .home-vector0422 {
            top: 14.009201049804688px;
            left: 15.880928039550781px;
            width: 16px;
            height: 22px;
            position: absolute;
          }
          .home-vector0423 {
            top: 22.330062866210938px;
            left: 32.41511535644531px;
            width: 4px;
            height: 13px;
            position: absolute;
          }
          .home-freepik-characterinject4 {
            top: 174.6247100830078px;
            left: 122.46000671386719px;
            width: 143.1993408203125px;
            height: 278.3843994140625px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0424 {
            top: 265.0552978515625px;
            left: 33.22999572753906px;
            width: 26px;
            height: 13px;
            position: absolute;
          }
          .home-vector0425 {
            top: 276.7852783203125px;
            left: 33.279998779296875px;
            width: 26px;
            height: 1px;
            position: absolute;
          }
          .home-vector0426 {
            top: 273.8602294921875px;
            left: 48.909912109375px;
            width: 1px;
            height: 2px;
            position: absolute;
          }
          .home-vector0427 {
            top: 274.153076171875px;
            left: 49.87071228027344px;
            width: 1px;
            height: 2px;
            position: absolute;
          }
          .home-vector0428 {
            top: 274.00457763671875px;
            left: 33.477874755859375px;
            width: 4px;
            height: 3px;
            position: absolute;
          }
          .home-vector0429 {
            top: 273.80401611328125px;
            left: 47.529083251953125px;
            width: 1px;
            height: 1px;
            position: absolute;
          }
          .home-vector0430 {
            top: 272.77471923828125px;
            left: 46.9298095703125px;
            width: 2px;
            height: 1px;
            position: absolute;
          }
          .home-vector0431 {
            top: 265.0552978515625px;
            left: 70.97999572753906px;
            width: 26px;
            height: 13px;
            position: absolute;
          }
          .home-vector0432 {
            top: 276.8052978515625px;
            left: 71.03999328613281px;
            width: 26px;
            height: 1px;
            position: absolute;
          }
          .home-vector0433 {
            top: 273.8602294921875px;
            left: 86.6641845703125px;
            width: 1px;
            height: 2px;
            position: absolute;
          }
          .home-vector0434 {
            top: 274.153076171875px;
            left: 87.62550354003906px;
            width: 1px;
            height: 2px;
            position: absolute;
          }
          .home-vector0435 {
            top: 274.00457763671875px;
            left: 71.22787475585938px;
            width: 4px;
            height: 3px;
            position: absolute;
          }
          .home-vector0436 {
            top: 273.80401611328125px;
            left: 85.27908325195312px;
            width: 1px;
            height: 1px;
            position: absolute;
          }
          .home-vector0437 {
            top: 272.77471923828125px;
            left: 84.70980834960938px;
            width: 2px;
            height: 1px;
            position: absolute;
          }
          .home-vector0438 {
            top: 6.335296630859375px;
            left: 0px;
            width: 143px;
            height: 150px;
            position: absolute;
          }
          .home-vector0439 {
            top: 37.55528259277344px;
            left: 15.409988403320312px;
            width: 87px;
            height: 70px;
            position: absolute;
          }
          .home-vector0440 {
            top: 85.84529113769531px;
            left: 39.339996337890625px;
            width: 16px;
            height: 2px;
            position: absolute;
          }
          .home-vector0441 {
            top: 83.66529846191406px;
            left: 41px;
            width: 17px;
            height: 2px;
            position: absolute;
          }
          .home-vector0442 {
            top: 66.84529113769531px;
            left: 69.40998840332031px;
            width: 4px;
            height: 15px;
            position: absolute;
          }
          .home-vector0443 {
            top: 85.52528381347656px;
            left: 15.8699951171875px;
            width: 14px;
            height: 4px;
            position: absolute;
          }
          .home-vector0444 {
            top: 38.605072021484375px;
            left: 63.762176513671875px;
            width: 12px;
            height: 20px;
            position: absolute;
          }
          .home-vector0445 {
            top: 40.94529724121094px;
            left: 99.14410400390625px;
            width: 1px;
            height: 18px;
            position: absolute;
          }
          .home-vector0446 {
            top: 3.645294189453125px;
            left: 47.829986572265625px;
            width: 21px;
            height: 38px;
            position: absolute;
          }
          .home-vector0447 {
            top: 19.853622436523438px;
            left: 61.451568603515625px;
            width: 2px;
            height: 4px;
            position: absolute;
          }
          .home-vector0448 {
            top: 0px;
            left: 21.682891845703125px;
            width: 51px;
            height: 79px;
            position: absolute;
          }
          .home-vector0449 {
            top: 23.375289916992188px;
            left: 62.42765808105469px;
            width: 3px;
            height: 4px;
            position: absolute;
          }
          .home-vector0450 {
            top: 106.19529724121094px;
            left: 27.74945068359375px;
            width: 66px;
            height: 165px;
            position: absolute;
          }
          .home-vector0451 {
            top: 129.05665588378906px;
            left: 43.69999694824219px;
            width: 14px;
            height: 3px;
            position: absolute;
          }
          .home-vector0452 {
            top: 262.95526123046875px;
            left: 66.01998901367188px;
            width: 24px;
            height: 1px;
            position: absolute;
          }
          .home-vector0453 {
            top: 267.395263671875px;
            left: 31.659988403320312px;
            width: 23px;
            height: 1px;
            position: absolute;
          }
          .home-vector0454 {
            top: 130.27528381347656px;
            left: 49.344085693359375px;
            width: 2px;
            height: 137px;
            position: absolute;
          }
          .home-vector0455 {
            top: 107.54530334472656px;
            left: 70.61000061035156px;
            width: 19px;
            height: 156px;
            position: absolute;
          }
          .home-vector0456 {
            top: 181.8752899169922px;
            left: 68.29998779296875px;
            width: 11px;
            height: 2px;
            position: absolute;
          }
          .home-vector0457 {
            top: 183.9272003173828px;
            left: 69.21998596191406px;
            width: 9px;
            height: 1px;
            position: absolute;
          }
          .home-vector0458 {
            top: 106.19529724121094px;
            left: 29.699996948242188px;
            width: 45px;
            height: 5px;
            opacity: 0.2;
            position: absolute;
          }
          .home-group31 {
            top: 129.5852813720703px;
            left: 44.649993896484375px;
            width: 8.17999267578125px;
            height: 31.740020751953125px;
            display: flex;
            opacity: 0.2;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0459 {
            top: 0px;
            left: 0px;
            width: 8px;
            height: 32px;
            position: absolute;
          }
          .home-highfivepana1 {
            top: 3587px;
            left: 171px;
            width: 500px;
            height: 500px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-freepikbackgroundcompleteinject7 {
            top: 62.52000045776367px;
            left: 25.579076766967773px;
            width: 454.9813537597656px;
            height: 374.5px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0460 {
            top: 79.09999084472656px;
            left: 289.02093505859375px;
            width: 50px;
            height: 73px;
            position: absolute;
          }
          .home-vector0461 {
            top: 79.09999084472656px;
            left: 286.51092529296875px;
            width: 50px;
            height: 73px;
            position: absolute;
          }
          .home-vector0462 {
            top: 86.97000122070312px;
            left: 292.7409362792969px;
            width: 38px;
            height: 57px;
            position: absolute;
          }
          .home-vector0463 {
            top: 86.59999084472656px;
            left: 292.5909423828125px;
            width: 38px;
            height: 57px;
            position: absolute;
          }
          .home-vector0464 {
            top: 79.09999084472656px;
            left: 329.9709167480469px;
            width: 7px;
            height: 8px;
            position: absolute;
          }
          .home-vector0465 {
            top: 143.72999572753906px;
            left: 330.6209411621094px;
            width: 7px;
            height: 8px;
            position: absolute;
          }
          .home-vector0466 {
            top: 143.8000030517578px;
            left: 330.6209411621094px;
            width: 7px;
            height: 8px;
            position: absolute;
          }
          .home-vector0467 {
            top: 143.62998962402344px;
            left: 286.51092529296875px;
            width: 7px;
            height: 8px;
            position: absolute;
          }
          .home-vector0468 {
            top: 143.62998962402344px;
            left: 286.51092529296875px;
            width: 7px;
            height: 8px;
            position: absolute;
          }
          .home-vector0469 {
            top: 79.09999084472656px;
            left: 286.51092529296875px;
            width: 6px;
            height: 8px;
            position: absolute;
          }
          .home-vector0470 {
            top: 98.52999877929688px;
            left: 306.0709228515625px;
            width: 13px;
            height: 36px;
            position: absolute;
          }
          .home-vector0471 {
            top: 282.4738464355469px;
            left: 225.9170379638672px;
            width: 22px;
            height: 50px;
            position: absolute;
          }
          .home-vector0472 {
            top: 325.2268371582031px;
            left: 198.0626678466797px;
            width: 26px;
            height: 22px;
            position: absolute;
          }
          .home-vector0473 {
            top: 334.8500061035156px;
            left: 210.03883361816406px;
            width: 20px;
            height: 34px;
            position: absolute;
          }
          .home-vector0474 {
            top: 296.4800109863281px;
            left: 229.50392150878906px;
            width: 10px;
            height: 78px;
            position: absolute;
          }
          .home-vector0475 {
            top: 331.3752746582031px;
            left: 234.75091552734375px;
            width: 34px;
            height: 22px;
            position: absolute;
          }
          .home-vector0476 {
            top: 339.08001708984375px;
            left: 230.09182739257812px;
            width: 26px;
            height: 28px;
            position: absolute;
          }
          .home-vector0477 {
            top: 107.11119079589844px;
            left: 357.0146789550781px;
            width: 98px;
            height: 192px;
            position: absolute;
          }
          .home-vector0478 {
            top: 128.8300018310547px;
            left: 393.3709411621094px;
            width: 33px;
            height: 196px;
            position: absolute;
          }
          .home-vector0479 {
            top: 173.09999084472656px;
            left: 399.0809326171875px;
            width: 15px;
            height: 25px;
            position: absolute;
          }
          .home-vector0480 {
            top: 179.69741821289062px;
            left: 416.04998779296875px;
            width: 29px;
            height: 19px;
            position: absolute;
          }
          .home-vector0481 {
            top: 229.63999938964844px;
            left: 406.9909362792969px;
            width: 29px;
            height: 10px;
            position: absolute;
          }
          .home-vector0482 {
            top: 220.0800018310547px;
            left: 386.5909423828125px;
            width: 21px;
            height: 19px;
            position: absolute;
          }
          .home-vector0483 {
            top: 255.4199981689453px;
            left: 373.9709167480469px;
            width: 27px;
            height: 24px;
            position: absolute;
          }
          .home-vector0484 {
            top: 265.3600158691406px;
            left: 400.1009216308594px;
            width: 36px;
            height: 14px;
            position: absolute;
          }
          .home-vector0485 {
            top: 164.05821228027344px;
            left: 0px;
            width: 111px;
            height: 159px;
            position: absolute;
          }
          .home-vector0486 {
            top: 166.95999145507812px;
            left: 7.320924758911133px;
            width: 70px;
            height: 173px;
            position: absolute;
          }
          .home-vector0487 {
            top: 195.5399932861328px;
            left: 54.590919494628906px;
            width: 10px;
            height: 46px;
            position: absolute;
          }
          .home-vector0488 {
            top: 226.13047790527344px;
            left: 1.530923843383789px;
            width: 53px;
            height: 15px;
            position: absolute;
          }
          .home-vector0489 {
            top: 236.84999084472656px;
            left: 72.61092376708984px;
            width: 34px;
            height: 66px;
            position: absolute;
          }
          .home-vector0490 {
            top: 273.6200256347656px;
            left: 2.9909229278564453px;
            width: 70px;
            height: 30px;
            position: absolute;
          }
          .home-vector0491 {
            top: 19.179996490478516px;
            left: 26.4409236907959px;
            width: 123px;
            height: 83px;
            position: absolute;
          }
          .home-vector0492 {
            top: 101.54998779296875px;
            left: 26.4409236907959px;
            width: 82px;
            height: 119px;
            position: absolute;
          }
          .home-vector0493 {
            top: 19.200000762939453px;
            left: 25.880922317504883px;
            width: 120px;
            height: 83px;
            position: absolute;
          }
          .home-vector0494 {
            top: 29.920001983642578px;
            left: 39.280921936035156px;
            width: 93px;
            height: 61px;
            position: absolute;
          }
          .home-vector0495 {
            top: 29.579998016357422px;
            left: 38.910919189453125px;
            width: 93px;
            height: 62px;
            position: absolute;
          }
          .home-vector0496 {
            top: 19.53000259399414px;
            left: 26.419275283813477px;
            width: 13px;
            height: 10px;
            position: absolute;
          }
          .home-vector0497 {
            top: 19.759998321533203px;
            left: 132.1509246826172px;
            width: 13px;
            height: 10px;
            position: absolute;
          }
          .home-vector0498 {
            top: 90.83999633789062px;
            left: 131.68092346191406px;
            width: 13px;
            height: 11px;
            position: absolute;
          }
          .home-vector0499 {
            top: 90.83999633789062px;
            left: 131.67784118652344px;
            width: 13px;
            height: 11px;
            position: absolute;
          }
          .home-vector0500 {
            top: 91.489990234375px;
            left: 26.420923233032227px;
            width: 13px;
            height: 10px;
            position: absolute;
          }
          .home-vector0501 {
            top: 69.66000366210938px;
            left: 58.14092254638672px;
            width: 21px;
            height: 58px;
            position: absolute;
          }
          .home-vector0502 {
            top: 0px;
            left: 359.6009216308594px;
            width: 63px;
            height: 92px;
            position: absolute;
          }
          .home-vector0503 {
            top: 0px;
            left: 356.4309387207031px;
            width: 63px;
            height: 92px;
            position: absolute;
          }
          .home-vector0504 {
            top: 9.950000762939453px;
            left: 364.3009338378906px;
            width: 48px;
            height: 72px;
            position: absolute;
          }
          .home-vector0505 {
            top: 9.78000259399414px;
            left: 364.2109375px;
            width: 48px;
            height: 72px;
            position: absolute;
          }
          .home-vector0506 {
            top: 0px;
            left: 411.3609313964844px;
            width: 9px;
            height: 10px;
            position: absolute;
          }
          .home-vector0507 {
            top: 81.69000244140625px;
            left: 412.1809387207031px;
            width: 8px;
            height: 10px;
            position: absolute;
          }
          .home-vector0508 {
            top: 81.69000244140625px;
            left: 412.15093994140625px;
            width: 8px;
            height: 10px;
            position: absolute;
          }
          .home-vector0509 {
            top: 81.55999755859375px;
            left: 356.4209289550781px;
            width: 8px;
            height: 10px;
            position: absolute;
          }
          .home-vector0510 {
            top: 81.55999755859375px;
            left: 356.4309387207031px;
            width: 8px;
            height: 10px;
            position: absolute;
          }
          .home-vector0511 {
            top: 0px;
            left: 356.4209289550781px;
            width: 8px;
            height: 10px;
            position: absolute;
          }
          .home-vector0512 {
            top: 24.560001373291016px;
            left: 381.15093994140625px;
            width: 16px;
            height: 45px;
            position: absolute;
          }
          .home-freepik-floorinject7 {
            top: 436.739990234375px;
            left: 26.809999465942383px;
            width: 435.1199951171875px;
            height: 0.52001953125px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0513 {
            top: 0px;
            left: 0px;
            width: 435px;
            height: 1px;
            position: absolute;
          }
          .home-freepikcharacter2inject7 {
            top: 135.2558135986328px;
            left: 258.489990234375px;
            width: 215.13180541992188px;
            height: 301.74420166015625px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0514 {
            top: 128.7441864013672px;
            left: 62.482452392578125px;
            width: 45px;
            height: 52px;
            position: absolute;
          }
          .home-vector0515 {
            top: 267.0263671875px;
            left: 178.70001220703125px;
            width: 36px;
            height: 21px;
            position: absolute;
          }
          .home-vector0516 {
            top: 118.51420593261719px;
            left: 15.651519775390625px;
            width: 16px;
            height: 36px;
            position: absolute;
          }
          .home-vector0517 {
            top: 183.8842010498047px;
            left: 145.8699951171875px;
            width: 68px;
            height: 100px;
            position: absolute;
          }
          .home-vector0518 {
            top: 46.06419372558594px;
            left: 1.41510009765625px;
            width: 74px;
            height: 162px;
            position: absolute;
          }
          .home-vector0519 {
            top: 155.3241729736328px;
            left: 61.7650146484375px;
            width: 110px;
            height: 146px;
            position: absolute;
          }
          .home-vector0520 {
            top: 0.93438720703125px;
            left: 7.510009765625px;
            width: 6px;
            height: 24px;
            position: absolute;
          }
          .home-vector0521 {
            top: 102.8900146484375px;
            left: 16.490020751953125px;
            width: 70px;
            height: 107px;
            position: absolute;
          }
          .home-vector0522 {
            top: 187.27418518066406px;
            left: 57.705474853515625px;
            width: 20px;
            height: 47px;
            position: absolute;
          }
          .home-vector0523 {
            top: 270.44390869140625px;
            left: 177.3900146484375px;
            width: 32px;
            height: 31px;
            position: absolute;
          }
          .home-vector0524 {
            top: 109.19418334960938px;
            left: 31.860015869140625px;
            width: 7px;
            height: 37px;
            position: absolute;
          }
          .home-vector0525 {
            top: 119.18418884277344px;
            left: 39.3900146484375px;
            width: 5px;
            height: 18px;
            position: absolute;
          }
          .home-vector0526 {
            top: 152.1141815185547px;
            left: 77.9000244140625px;
            width: 3px;
            height: 13px;
            position: absolute;
          }
          .home-vector0527 {
            top: 193.78419494628906px;
            left: 57.4317626953125px;
            width: 17px;
            height: 42px;
            position: absolute;
          }
          .home-vector0528 {
            top: 223.3842010498047px;
            left: 96.0699462890625px;
            width: 35px;
            height: 23px;
            position: absolute;
          }
          .home-vector0529 {
            top: 240.18397521972656px;
            left: 146.54983520507812px;
            width: 6px;
            height: 25px;
            position: absolute;
          }
          .home-vector0530 {
            top: 223.33363342285156px;
            left: 142.97677612304688px;
            width: 18px;
            height: 30px;
            position: absolute;
          }
          .home-vector0531 {
            top: 269.111572265625px;
            left: 177.58999633789062px;
            width: 21px;
            height: 13px;
            position: absolute;
          }
          .home-vector0532 {
            top: 262.86224365234375px;
            left: 179.5px;
            width: 24px;
            height: 12px;
            position: absolute;
          }
          .home-group32 {
            top: 225.51417541503906px;
            left: 96.072998046875px;
            width: 29.747007369995117px;
            height: 27.230621337890625px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0533 {
            top: 0px;
            left: 0px;
            width: 30px;
            height: 27px;
            position: absolute;
          }
          .home-group33 {
            top: 223.3341827392578px;
            left: 142.20550537109375px;
            width: 10.954487800598145px;
            height: 31.733457565307617px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0534 {
            top: 0px;
            left: 0px;
            width: 11px;
            height: 32px;
            position: absolute;
          }
          .home-vector0535 {
            top: 150.9641876220703px;
            left: 48.45001220703125px;
            width: 3px;
            height: 16px;
            position: absolute;
          }
          .home-vector0536 {
            top: 154.6141815185547px;
            left: 29.30657958984375px;
            width: 9px;
            height: 10px;
            position: absolute;
          }
          .home-vector0537 {
            top: 138.8694305419922px;
            left: 37.61602783203125px;
            width: 9px;
            height: 11px;
            position: absolute;
          }
          .home-vector0538 {
            top: 121.65419006347656px;
            left: 39.406158447265625px;
            width: 4px;
            height: 5px;
            position: absolute;
          }
          .home-vector0539 {
            top: 134.03501892089844px;
            left: 29.029998779296875px;
            width: 5px;
            height: 1px;
            position: absolute;
          }
          .home-vector0540 {
            top: 136.1342010498047px;
            left: 55.360015869140625px;
            width: 2px;
            height: 9px;
            position: absolute;
          }
          .home-vector0541 {
            top: 151.06419372558594px;
            left: 62.360015869140625px;
            width: 7px;
            height: 7px;
            position: absolute;
          }
          .home-vector0542 {
            top: 180.98118591308594px;
            left: 40.71002197265625px;
            width: 9px;
            height: 1px;
            position: absolute;
          }
          .home-vector0543 {
            top: 175.4640655517578px;
            left: 59.12353515625px;
            width: 2px;
            height: 11px;
            position: absolute;
          }
          .home-vector0544 {
            top: 177.67417907714844px;
            left: 71px;
            width: 8px;
            height: 9px;
            position: absolute;
          }
          .home-vector0545 {
            top: 203.8441925048828px;
            left: 82.6500244140625px;
            width: 6px;
            height: 6px;
            position: absolute;
          }
          .home-vector0546 {
            top: 212.4264678955078px;
            left: 62.660003662109375px;
            width: 9px;
            height: 5px;
            position: absolute;
          }
          .home-vector0547 {
            top: 222.7141876220703px;
            left: 79.31631469726562px;
            width: 1px;
            height: 12px;
            position: absolute;
          }
          .home-vector0548 {
            top: 207.99147033691406px;
            left: 102.1300048828125px;
            width: 8px;
            height: 9px;
            position: absolute;
          }
          .home-vector0549 {
            top: 216.3426055908203px;
            left: 120.71334838867188px;
            width: 6px;
            height: 10px;
            position: absolute;
          }
          .home-vector0550 {
            top: 200.2441864013672px;
            left: 109.10000610351562px;
            width: 10px;
            height: 3px;
            position: absolute;
          }
          .home-vector0551 {
            top: 234.1141815185547px;
            left: 110.8970947265625px;
            width: 1px;
            height: 9px;
            position: absolute;
          }
          .home-vector0552 {
            top: 247.4541778564453px;
            left: 118.010009765625px;
            width: 2px;
            height: 10px;
            position: absolute;
          }
          .home-vector0553 {
            top: 244.40419006347656px;
            left: 99.75454711914062px;
            width: 2px;
            height: 10px;
            position: absolute;
          }
          .home-vector0554 {
            top: 254.0741729736328px;
            left: 74.08999633789062px;
            width: 9px;
            height: 7px;
            position: absolute;
          }
          .home-vector0555 {
            top: 241.8341827392578px;
            left: 82.58999633789062px;
            width: 12px;
            height: 6px;
            position: absolute;
          }
          .home-vector0556 {
            top: 254.29417419433594px;
            left: 78.79000854492188px;
            width: 51px;
            height: 33px;
            position: absolute;
          }
          .home-vector0557 {
            top: 272.08416748046875px;
            left: 99.24636840820312px;
            width: 3px;
            height: 9px;
            position: absolute;
          }
          .home-vector0558 {
            top: 277.24420166015625px;
            left: 86.95001220703125px;
            width: 4px;
            height: 6px;
            position: absolute;
          }
          .home-vector0559 {
            top: 291.08416748046875px;
            left: 114.83999633789062px;
            width: 8px;
            height: 5px;
            position: absolute;
          }
          .home-vector0560 {
            top: 268.38421630859375px;
            left: 122.33001708984375px;
            width: 5px;
            height: 6px;
            position: absolute;
          }
          .home-vector0561 {
            top: 280.68328857421875px;
            left: 141.73001098632812px;
            width: 4px;
            height: 8px;
            position: absolute;
          }
          .home-vector0562 {
            top: 291.74420166015625px;
            left: 153.58999633789062px;
            width: 7px;
            height: 5px;
            position: absolute;
          }
          .home-vector0563 {
            top: 256.34417724609375px;
            left: 139.52398681640625px;
            width: 7px;
            height: 12px;
            position: absolute;
          }
          .home-vector0564 {
            top: 238.30418395996094px;
            left: 139.30001831054688px;
            width: 10px;
            height: 2px;
            position: absolute;
          }
          .home-vector0565 {
            top: 222.05418395996094px;
            left: 134.68002319335938px;
            width: 6px;
            height: 7px;
            position: absolute;
          }
          .home-vector0566 {
            top: 221.8441925048828px;
            left: 152.1500244140625px;
            width: 9px;
            height: 2px;
            position: absolute;
          }
          .home-vector0567 {
            top: 215.4641876220703px;
            left: 176.510009765625px;
            width: 3px;
            height: 8px;
            position: absolute;
          }
          .home-vector0568 {
            top: 239.3668975830078px;
            left: 165.08999633789062px;
            width: 8px;
            height: 5px;
            position: absolute;
          }
          .home-vector0569 {
            top: 231.7441864013672px;
            left: 182.80001831054688px;
            width: 3px;
            height: 12px;
            position: absolute;
          }
          .home-vector0570 {
            top: 257.10418701171875px;
            left: 168.04000854492188px;
            width: 7px;
            height: 9px;
            position: absolute;
          }
          .home-vector0571 {
            top: 250.16419982910156px;
            left: 183.36386108398438px;
            width: 5px;
            height: 7px;
            position: absolute;
          }
          .home-vector0572 {
            top: 247.2041778564453px;
            left: 195.20001220703125px;
            width: 6px;
            height: 8px;
            position: absolute;
          }
          .home-vector0573 {
            top: 258.3333740234375px;
            left: 194.6500244140625px;
            width: 4px;
            height: 6px;
            position: absolute;
          }
          .home-vector0574 {
            top: 273.42254638671875px;
            left: 185.65478515625px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector0575 {
            top: 286.74420166015625px;
            left: 76.11001586914062px;
            width: 8px;
            height: 8px;
            position: absolute;
          }
          .home-vector0576 {
            top: 0px;
            left: 1.9534912109375px;
            width: 19px;
            height: 53px;
            position: absolute;
          }
          .home-vector0577 {
            top: 16.564193725585938px;
            left: 0.2581787109375px;
            width: 11px;
            height: 36px;
            position: absolute;
          }
          .home-vector0578 {
            top: 16.329925537109375px;
            left: 0px;
            width: 11px;
            height: 37px;
            position: absolute;
          }
          .home-vector0579 {
            top: 97.21919250488281px;
            left: 134.74002075195312px;
            width: 22px;
            height: 22px;
            position: absolute;
          }
          .home-vector0580 {
            top: 70.34541320800781px;
            left: 78.42843627929688px;
            width: 58px;
            height: 114px;
            position: absolute;
          }
          .home-vector0581 {
            top: 100.73265075683594px;
            left: 84.30462646484375px;
            width: 9px;
            height: 3px;
            position: absolute;
          }
          .home-vector0582 {
            top: 105.29228210449219px;
            left: 105.34902954101562px;
            width: 9px;
            height: 3px;
            position: absolute;
          }
          .home-vector0583 {
            top: 98.6712646484375px;
            left: 91.4129638671875px;
            width: 10px;
            height: 20px;
            position: absolute;
          }
          .home-vector0584 {
            top: 143.2041778564453px;
            left: 93.04000854492188px;
            width: 22px;
            height: 8px;
            position: absolute;
          }
          .home-vector0585 {
            top: 122.93614196777344px;
            left: 96.9822998046875px;
            width: 7px;
            height: 5px;
            position: absolute;
          }
          .home-vector0586 {
            top: 120.87236022949219px;
            left: 95.4559326171875px;
            width: 9px;
            height: 6px;
            position: absolute;
          }
          .home-vector0587 {
            top: 98.14677429199219px;
            left: 106.99691772460938px;
            width: 11px;
            height: 4px;
            position: absolute;
          }
          .home-vector0588 {
            top: 93.277587890625px;
            left: 86.68313598632812px;
            width: 8px;
            height: 3px;
            position: absolute;
          }
          .home-vector0589 {
            top: 62.131378173828125px;
            left: 78.51223754882812px;
            width: 49px;
            height: 31px;
            position: absolute;
          }
          .home-vector0590 {
            top: 63.69415283203125px;
            left: 81.67623901367188px;
            width: 28px;
            height: 30px;
            position: absolute;
          }
          .home-vector0591 {
            top: 65.03465270996094px;
            left: 94.54986572265625px;
            width: 28px;
            height: 20px;
            position: absolute;
          }
          .home-vector0592 {
            top: 70.32896423339844px;
            left: 119.41812133789062px;
            width: 23px;
            height: 40px;
            position: absolute;
          }
          .home-vector0593 {
            top: 99.30418395996094px;
            left: 117.73736572265625px;
            width: 16px;
            height: 40px;
            position: absolute;
          }
          .home-vector0594 {
            top: 156.8641815185547px;
            left: 81.80618286132812px;
            width: 51px;
            height: 42px;
            position: absolute;
          }
          .home-vector0595 {
            top: 105.294189453125px;
            left: 121.32888793945312px;
            width: 61px;
            height: 113px;
            position: absolute;
          }
          .home-vector0596 {
            top: 108.4635009765625px;
            left: 129.40997314453125px;
            width: 11px;
            height: 15px;
            position: absolute;
          }
          .home-vector0597 {
            top: 111.77427673339844px;
            left: 132.79000854492188px;
            width: 5px;
            height: 8px;
            position: absolute;
          }
          .home-vector0598 {
            top: 156.4841766357422px;
            left: 80.80001831054688px;
            width: 6px;
            height: 21px;
            position: absolute;
          }
          .home-vector0599 {
            top: 164.5741729736328px;
            left: 82.65878295898438px;
            width: 3px;
            height: 2px;
            position: absolute;
          }
          .home-vector0600 {
            top: 163.15187072753906px;
            left: 86.29000854492188px;
            width: 6px;
            height: 4px;
            position: absolute;
          }
          .home-vector0601 {
            top: 179.05418395996094px;
            left: 95.73001098632812px;
            width: 2px;
            height: 8px;
            position: absolute;
          }
          .home-vector0602 {
            top: 181.5841827392578px;
            left: 111.19219970703125px;
            width: 1px;
            height: 9px;
            position: absolute;
          }
          .home-freepikcharacter1inject7 {
            top: 121.04878234863281px;
            left: 35.88999938964844px;
            width: 222.24468994140625px;
            height: 316.09124755859375px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0603 {
            top: 248.8412322998047px;
            left: 0px;
            width: 48px;
            height: 67px;
            position: absolute;
          }
          .home-vector0604 {
            top: 140.12010192871094px;
            left: 143.7899932861328px;
            width: 37px;
            height: 60px;
            position: absolute;
          }
          .home-vector0605 {
            top: 158.0599822998047px;
            left: 9.110000610351562px;
            width: 141px;
            height: 158px;
            position: absolute;
          }
          .home-vector0606 {
            top: 12.570999145507812px;
            left: 211.41366577148438px;
            width: 8px;
            height: 20px;
            position: absolute;
          }
          .home-vector0607 {
            top: 2.1212158203125px;
            left: 203.75999450683594px;
            width: 18px;
            height: 45px;
            position: absolute;
          }
          .home-vector0608 {
            top: 46.13121032714844px;
            left: 136.47999572753906px;
            width: 86px;
            height: 156px;
            position: absolute;
          }
          .home-vector0609 {
            top: 0px;
            left: 200.10084533691406px;
            width: 22px;
            height: 54px;
            position: absolute;
          }
          .home-vector0610 {
            top: 20.671218872070312px;
            left: 198.50999450683594px;
            width: 16px;
            height: 29px;
            position: absolute;
          }
          .home-vector0611 {
            top: 20.828125px;
            left: 198.07000732421875px;
            width: 10px;
            height: 14px;
            position: absolute;
          }
          .home-vector0612 {
            top: 6.841217041015625px;
            left: 205.66000366210938px;
            width: 3px;
            height: 19px;
            position: absolute;
          }
          .home-vector0613 {
            top: 13.18121337890625px;
            left: 211.24037170410156px;
            width: 3px;
            height: 14px;
            position: absolute;
          }
          .home-vector0614 {
            top: 33.96044921875px;
            left: 207.61000061035156px;
            width: 10px;
            height: 5px;
            position: absolute;
          }
          .home-vector0615 {
            top: 28.3712158203125px;
            left: 200.03610229492188px;
            width: 5px;
            height: 20px;
            position: absolute;
          }
          .home-vector0616 {
            top: 142.1612091064453px;
            left: 124.27000427246094px;
            width: 50px;
            height: 74px;
            position: absolute;
          }
          .home-vector0617 {
            top: 159.7012176513672px;
            left: 121.88999938964844px;
            width: 5px;
            height: 8px;
            position: absolute;
          }
          .home-vector0618 {
            top: 160.0912322998047px;
            left: 128.61293029785156px;
            width: 4px;
            height: 15px;
            position: absolute;
          }
          .home-vector0619 {
            top: 151.0612030029297px;
            left: 142.27066040039062px;
            width: 24px;
            height: 51px;
            position: absolute;
          }
          .home-vector0620 {
            top: 212.62123107910156px;
            left: 50.040000915527344px;
            width: 1px;
            height: 63px;
            position: absolute;
          }
          .home-vector0621 {
            top: 182.9212188720703px;
            left: 35.18952941894531px;
            width: 14px;
            height: 19px;
            position: absolute;
          }
          .home-vector0622 {
            top: 160.12123107910156px;
            left: 67.57191467285156px;
            width: 51px;
            height: 30px;
            position: absolute;
          }
          .home-vector0623 {
            top: 234.73585510253906px;
            left: 12.709770202636719px;
            width: 37px;
            height: 12px;
            position: absolute;
          }
          .home-vector0624 {
            top: 232.90711975097656px;
            left: 49.599998474121094px;
            width: 99px;
            height: 1px;
            position: absolute;
          }
          .home-vector0625 {
            top: 241.4512176513672px;
            left: 49.599998474121094px;
            width: 99px;
            height: 1px;
            position: absolute;
          }
          .home-vector0626 {
            top: 252.2912139892578px;
            left: 76.77000427246094px;
            width: 58px;
            height: 57px;
            position: absolute;
          }
          .home-group34 {
            top: 260.95123291015625px;
            left: 81.30117797851562px;
            width: 49.668819427490234px;
            height: 43.08024978637695px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0627 {
            top: 0px;
            left: 0px;
            width: 50px;
            height: 43px;
            position: absolute;
          }
          .home-vector0628 {
            top: 83.03121948242188px;
            left: 43.26464080810547px;
            width: 28px;
            height: 57px;
            position: absolute;
          }
          .home-vector0629 {
            top: 72.73121643066406px;
            left: 90.98999786376953px;
            width: 49px;
            height: 53px;
            position: absolute;
          }
          .home-vector0630 {
            top: 70.42562866210938px;
            left: 63.44483947753906px;
            width: 62px;
            height: 109px;
            position: absolute;
          }
          .home-vector0631 {
            top: 101.79737854003906px;
            left: 111.93574523925781px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0632 {
            top: 99.59281921386719px;
            left: 108.32452392578125px;
            width: 9px;
            height: 3px;
            position: absolute;
          }
          .home-vector0633 {
            top: 104.45921325683594px;
            left: 89.12777709960938px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0634 {
            top: 102.26084899902344px;
            left: 85.45452117919922px;
            width: 9px;
            height: 3px;
            position: absolute;
          }
          .home-vector0635 {
            top: 101.29908752441406px;
            left: 101.20126342773438px;
            width: 9px;
            height: 19px;
            position: absolute;
          }
          .home-vector0636 {
            top: 93.57344055175781px;
            left: 83.20716857910156px;
            width: 11px;
            height: 4px;
            position: absolute;
          }
          .home-vector0637 {
            top: 92.77311706542969px;
            left: 107.32038879394531px;
            width: 8px;
            height: 3px;
            position: absolute;
          }
          .home-vector0638 {
            top: 77.19993591308594px;
            left: 58.89237976074219px;
            width: 20px;
            height: 44px;
            position: absolute;
          }
          .home-vector0639 {
            top: 109.80876159667969px;
            left: 60.191383361816406px;
            width: 12px;
            height: 16px;
            position: absolute;
          }
          .home-vector0640 {
            top: 113.40008544921875px;
            left: 62.971153259277344px;
            width: 5px;
            height: 9px;
            position: absolute;
          }
          .home-vector0641 {
            top: 64.48309326171875px;
            left: 68.46533966064453px;
            width: 61px;
            height: 26px;
            position: absolute;
          }
          .home-vector0642 {
            top: 105.96121215820312px;
            left: 69.81999969482422px;
            width: 60px;
            height: 48px;
            position: absolute;
          }
          .home-group35 {
            top: 134.5446014404297px;
            left: 102.64999389648438px;
            width: 8.021615028381348px;
            height: 2.5011422634124756px;
            display: flex;
            opacity: 0.6;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0643 {
            top: 0px;
            left: 0px;
            width: 8px;
            height: 3px;
            position: absolute;
          }
          .home-vector0644 {
            top: 124.10015869140625px;
            left: 99.4609375px;
            width: 8px;
            height: 6px;
            position: absolute;
          }
          .home-vector0645 {
            top: 118.71511840820312px;
            left: 92.19999694824219px;
            width: 38px;
            height: 36px;
            position: absolute;
          }
          .home-vector0646 {
            top: 81.79205322265625px;
            left: 45.01891326904297px;
            width: 23px;
            height: 44px;
            position: absolute;
          }
          .home-vector0647 {
            top: 72.19482421875px;
            left: 69.69999694824219px;
            width: 61px;
            height: 18px;
            position: absolute;
          }
          .home-vector0648 {
            top: 64.001220703125px;
            left: 68.46163940429688px;
            width: 48px;
            height: 16px;
            position: absolute;
          }
          .home-freepik-linesinject7 {
            top: 75.17999267578125px;
            left: 192.34963989257812px;
            width: 124.82037353515625px;
            height: 64.4229736328125px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0649 {
            top: 25.74920654296875px;
            left: 10.989013671875px;
            width: 25px;
            height: 21px;
            position: absolute;
          }
          .home-vector0650 {
            top: 0px;
            left: 62.24884033203125px;
            width: 2px;
            height: 40px;
            position: absolute;
          }
          .home-vector0651 {
            top: 10.569770812988281px;
            left: 38.781463623046875px;
            width: 7px;
            height: 23px;
            position: absolute;
          }
          .home-vector0652 {
            top: 48.980010986328125px;
            left: 14.730361938476562px;
            width: 15px;
            height: 7px;
            position: absolute;
          }
          .home-vector0653 {
            top: 43.87738037109375px;
            left: 0px;
            width: 4px;
            height: 1px;
            position: absolute;
          }
          .home-vector0654 {
            top: 0.4600067138671875px;
            left: 39.18035888671875px;
            width: 1px;
            height: 4px;
            position: absolute;
          }
          .home-vector0655 {
            top: 18.228843688964844px;
            left: 78.647705078125px;
            width: 21px;
            height: 23px;
            position: absolute;
          }
          .home-vector0656 {
            top: 10.939056396484375px;
            left: 104.24822998046875px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector0657 {
            top: 36.56000518798828px;
            left: 87.79037475585938px;
            width: 37px;
            height: 15px;
            position: absolute;
          }
          .home-vector0658 {
            top: 61.18000793457031px;
            left: 91.4803466796875px;
            width: 19px;
            height: 3px;
            position: absolute;
          }
          .home-vector0659 {
            top: 58.459991455078125px;
            left: 117.7303466796875px;
            width: 6px;
            height: 1px;
            position: absolute;
          }
          .home-freepik-plantinject7 {
            top: 382px;
            left: 228.67413330078125px;
            width: 40.549415588378906px;
            height: 55.040008544921875px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0660 {
            top: 0px;
            left: 8.17926025390625px;
            width: 14px;
            height: 29px;
            position: absolute;
          }
          .home-vector0661 {
            top: 21.76580810546875px;
            left: 26.321121215820312px;
            width: 14px;
            height: 15px;
            position: absolute;
          }
          .home-vector0662 {
            top: 27.6199951171875px;
            left: 25.722702026367188px;
            width: 9px;
            height: 26px;
            position: absolute;
          }
          .home-vector0663 {
            top: 8.290008544921875px;
            left: 13.32586669921875px;
            width: 13px;
            height: 47px;
            position: absolute;
          }
          .home-vector0664 {
            top: 29.837158203125px;
            left: 0px;
            width: 20px;
            height: 13px;
            position: absolute;
          }
          .home-vector0665 {
            top: 34.787200927734375px;
            left: 6.9456787109375px;
            width: 19px;
            height: 18px;
            position: absolute;
          }
          .home-homescreenpana2 {
            top: 3987px;
            left: 769px;
            width: 500px;
            height: 500px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-freepikbackgroundcompleteinject5 {
            top: 25.200000762939453px;
            left: 36.22999954223633px;
            width: 422.8699951171875px;
            height: 453.3499755859375px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0666 {
            top: 261.7799987792969px;
            left: 32.8900032043457px;
            width: 96px;
            height: 182px;
            position: absolute;
          }
          .home-vector0667 {
            top: 261.7799987792969px;
            left: 4.279998779296875px;
            width: 96px;
            height: 182px;
            position: absolute;
          }
          .home-vector0668 {
            top: 270.40997314453125px;
            left: 10.830001831054688px;
            width: 83px;
            height: 29px;
            position: absolute;
          }
          .home-vector0669 {
            top: 270.90997314453125px;
            left: 37.070003509521484px;
            width: 31px;
            height: 6px;
            position: absolute;
          }
          .home-vector0670 {
            top: 307.0999755859375px;
            left: 10.830001831054688px;
            width: 83px;
            height: 29px;
            position: absolute;
          }
          .home-vector0671 {
            top: 307.6099853515625px;
            left: 37.070003509521484px;
            width: 31px;
            height: 6px;
            position: absolute;
          }
          .home-vector0672 {
            top: 343.79998779296875px;
            left: 10.830001831054688px;
            width: 83px;
            height: 29px;
            position: absolute;
          }
          .home-vector0673 {
            top: 344.30999755859375px;
            left: 37.070003509521484px;
            width: 31px;
            height: 6px;
            position: absolute;
          }
          .home-vector0674 {
            top: 380.5px;
            left: 10.830001831054688px;
            width: 83px;
            height: 29px;
            position: absolute;
          }
          .home-vector0675 {
            top: 380.989990234375px;
            left: 37.06975173950195px;
            width: 31px;
            height: 6px;
            position: absolute;
          }
          .home-vector0676 {
            top: 254.9600067138672px;
            left: 0px;
            width: 105px;
            height: 9px;
            position: absolute;
          }
          .home-vector0677 {
            top: 254.9600067138672px;
            left: 104.73001098632812px;
            width: 31px;
            height: 9px;
            position: absolute;
          }
          .home-vector0678 {
            top: 444.03997802734375px;
            left: 4.279998779296875px;
            width: 5px;
            height: 9px;
            position: absolute;
          }
          .home-vector0679 {
            top: 444.03997802734375px;
            left: 35.57999801635742px;
            width: 5px;
            height: 9px;
            position: absolute;
          }
          .home-vector0680 {
            top: 444.03997802734375px;
            left: 92.77000427246094px;
            width: 5px;
            height: 9px;
            position: absolute;
          }
          .home-vector0681 {
            top: 444.03997802734375px;
            left: 121.36000061035156px;
            width: 5px;
            height: 9px;
            position: absolute;
          }
          .home-vector0682 {
            top: 230.72000122070312px;
            left: 92.3800048828125px;
            width: 11px;
            height: 25px;
            position: absolute;
          }
          .home-vector0683 {
            top: 207.65000915527344px;
            left: 56.8599967956543px;
            width: 39px;
            height: 49px;
            position: absolute;
          }
          .home-vector0684 {
            top: 211.27000427246094px;
            left: 60.8900032043457px;
            width: 29px;
            height: 41px;
            position: absolute;
          }
          .home-vector0685 {
            top: 217.1300048828125px;
            left: 67.24000549316406px;
            width: 17px;
            height: 28px;
            position: absolute;
          }
          .home-vector0686 {
            top: 22.049999237060547px;
            left: 284.41998291015625px;
            width: 129px;
            height: 232px;
            position: absolute;
          }
          .home-vector0687 {
            top: 28.790000915527344px;
            left: 289.5799865722656px;
            width: 118px;
            height: 219px;
            position: absolute;
          }
          .home-vector0688 {
            top: 18.110000610351562px;
            left: 413.6999816894531px;
            width: 5px;
            height: 238px;
            position: absolute;
          }
          .home-vector0689 {
            top: 91.66999816894531px;
            left: 289.5799865722656px;
            width: 120px;
            height: 2px;
            position: absolute;
          }
          .home-vector0690 {
            top: 143.72999572753906px;
            left: 289.5799865722656px;
            width: 120px;
            height: 2px;
            position: absolute;
          }
          .home-vector0691 {
            top: 195.77999877929688px;
            left: 289.5799865722656px;
            width: 120px;
            height: 2px;
            position: absolute;
          }
          .home-vector0692 {
            top: 253.5800018310547px;
            left: 345.41998291015625px;
            width: 161px;
            height: 6px;
            position: absolute;
          }
          .home-vector0693 {
            top: 28.790000915527344px;
            left: 312.22998046875px;
            width: 3px;
            height: 64px;
            position: absolute;
          }
          .home-vector0694 {
            top: 28.790000915527344px;
            left: 335.4499816894531px;
            width: 3px;
            height: 64px;
            position: absolute;
          }
          .home-vector0695 {
            top: 28.790000915527344px;
            left: 358.66998291015625px;
            width: 3px;
            height: 64px;
            position: absolute;
          }
          .home-vector0696 {
            top: 28.790000915527344px;
            left: 381.8899841308594px;
            width: 3px;
            height: 64px;
            position: absolute;
          }
          .home-vector0697 {
            top: 18.110000610351562px;
            left: 278.9499816894531px;
            width: 5px;
            height: 238px;
            position: absolute;
          }
          .home-vector0698 {
            top: 15.71999740600586px;
            left: 278.9499816894531px;
            width: 140px;
            height: 6px;
            position: absolute;
          }
          .home-vector0699 {
            top: 257.17999267578125px;
            left: 275.0699768066406px;
            width: 148px;
            height: 6px;
            position: absolute;
          }
          .home-vector0700 {
            top: 254.3000030517578px;
            left: 275.0699768066406px;
            width: 148px;
            height: 3px;
            position: absolute;
          }
          .home-vector0701 {
            top: 19.59000015258789px;
            left: 63.77000045776367px;
            width: 72px;
            height: 72px;
            position: absolute;
          }
          .home-vector0702 {
            top: 42.0022087097168px;
            left: 86.97805786132812px;
            width: 27px;
            height: 27px;
            position: absolute;
          }
          .home-vector0703 {
            top: 19.31999969482422px;
            left: 63.4900016784668px;
            width: 73px;
            height: 73px;
            position: absolute;
          }
          .home-vector0704 {
            top: 0.1399993896484375px;
            left: 146.48001098632812px;
            width: 43px;
            height: 43px;
            position: absolute;
          }
          .home-vector0705 {
            top: 13.551799774169922px;
            left: 160.35617065429688px;
            width: 16px;
            height: 16px;
            position: absolute;
          }
          .home-vector0706 {
            top: 0px;
            left: 146.35000610351562px;
            width: 44px;
            height: 43px;
            position: absolute;
          }
          .home-vector0707 {
            top: 112.75px;
            left: 9.830001831054688px;
            width: 82px;
            height: 85px;
            position: absolute;
          }
          .home-vector0708 {
            top: 112.75px;
            left: 4.290000915527344px;
            width: 82px;
            height: 85px;
            position: absolute;
          }
          .home-vector0709 {
            top: 124.22000122070312px;
            left: 15.290000915527344px;
            width: 60px;
            height: 62px;
            position: absolute;
          }
          .home-vector0710 {
            top: 187.02999877929688px;
            left: 4.369998931884766px;
            width: 11px;
            height: 11px;
            position: absolute;
          }
          .home-vector0711 {
            top: 186.8800048828125px;
            left: 75.14999389648438px;
            width: 11px;
            height: 11px;
            position: absolute;
          }
          .home-vector0712 {
            top: 113.6300048828125px;
            left: 74.99000549316406px;
            width: 11px;
            height: 11px;
            position: absolute;
          }
          .home-vector0713 {
            top: 113.62001037597656px;
            left: 4.369998931884766px;
            width: 11px;
            height: 11px;
            position: absolute;
          }
          .home-vector0714 {
            top: 123.83000183105469px;
            left: 15.240001678466797px;
            width: 60px;
            height: 63px;
            position: absolute;
          }
          .home-vector0715 {
            top: 150.29000854492188px;
            left: 31.06557846069336px;
            width: 15px;
            height: 15px;
            position: absolute;
          }
          .home-vector0716 {
            top: 150.27757263183594px;
            left: 46.2599983215332px;
            width: 15px;
            height: 16px;
            position: absolute;
          }
          .home-vector0717 {
            top: 141.8000030517578px;
            left: 40.360103607177734px;
            width: 10px;
            height: 24px;
            position: absolute;
          }
          .home-freepik-plantinject5 {
            top: 246.72999572753906px;
            left: 338.44000244140625px;
            width: 118.27999877929688px;
            height: 232.47999572753906px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0718 {
            top: 125.96000671386719px;
            left: 3.660003662109375px;
            width: 44px;
            height: 45px;
            position: absolute;
          }
          .home-vector0719 {
            top: 97.40000915527344px;
            left: 2.540008544921875px;
            width: 44px;
            height: 45px;
            position: absolute;
          }
          .home-vector0720 {
            top: 69.47001647949219px;
            left: 0px;
            width: 44px;
            height: 45px;
            position: absolute;
          }
          .home-vector0721 {
            top: 34.38999938964844px;
            left: 1.91998291015625px;
            width: 38px;
            height: 51px;
            position: absolute;
          }
          .home-vector0722 {
            top: 0px;
            left: 17.0697021484375px;
            width: 18px;
            height: 63px;
            position: absolute;
          }
          .home-vector0723 {
            top: 10.729995727539062px;
            left: 37.55999755859375px;
            width: 31px;
            height: 63px;
            position: absolute;
          }
          .home-vector0724 {
            top: 35.02000427246094px;
            left: 41.04998779296875px;
            width: 38px;
            height: 62px;
            position: absolute;
          }
          .home-vector0725 {
            top: 64.44001770019531px;
            left: 44.91998291015625px;
            width: 38px;
            height: 62px;
            position: absolute;
          }
          .home-vector0726 {
            top: 100.28999328613281px;
            left: 46.8699951171875px;
            width: 38px;
            height: 62px;
            position: absolute;
          }
          .home-vector0727 {
            top: 58.21000671386719px;
            left: 34.67999267578125px;
            width: 13px;
            height: 138px;
            position: absolute;
          }
          .home-group36 {
            top: 125.96000671386719px;
            left: 3.660003662109375px;
            width: 43.639984130859375px;
            height: 45px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0728 {
            top: 0px;
            left: 0px;
            width: 44px;
            height: 45px;
            position: absolute;
          }
          .home-group37 {
            top: 97.40000915527344px;
            left: 2.540008544921875px;
            width: 43.649993896484375px;
            height: 45px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0729 {
            top: 0px;
            left: 0px;
            width: 44px;
            height: 45px;
            position: absolute;
          }
          .home-group38 {
            top: 69.47001647949219px;
            left: 0px;
            width: 43.649993896484375px;
            height: 45px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0730 {
            top: 0px;
            left: 0px;
            width: 44px;
            height: 45px;
            position: absolute;
          }
          .home-group39 {
            top: 34.38999938964844px;
            left: 1.91998291015625px;
            width: 38px;
            height: 50.75px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0731 {
            top: 0px;
            left: 0px;
            width: 38px;
            height: 51px;
            position: absolute;
          }
          .home-group40 {
            top: 0px;
            left: 17.0697021484375px;
            width: 18.054922103881836px;
            height: 62.50999450683594px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0732 {
            top: 0px;
            left: 0px;
            width: 18px;
            height: 63px;
            position: absolute;
          }
          .home-group41 {
            top: 10.729995727539062px;
            left: 37.55999755859375px;
            width: 31.239990234375px;
            height: 62.540008544921875px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0733 {
            top: 0px;
            left: 0px;
            width: 31px;
            height: 63px;
            position: absolute;
          }
          .home-group42 {
            top: 35.02000427246094px;
            left: 41.04998779296875px;
            width: 37.680023193359375px;
            height: 62.420013427734375px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0734 {
            top: 0px;
            left: 0px;
            width: 38px;
            height: 62px;
            position: absolute;
          }
          .home-group43 {
            top: 64.44001770019531px;
            left: 44.91998291015625px;
            width: 37.69000244140625px;
            height: 62.40997314453125px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0735 {
            top: 0px;
            left: 0px;
            width: 38px;
            height: 62px;
            position: absolute;
          }
          .home-group44 {
            top: 100.28999328613281px;
            left: 46.8699951171875px;
            width: 37.69000244140625px;
            height: 62.410003662109375px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0736 {
            top: 0px;
            left: 0px;
            width: 38px;
            height: 62px;
            position: absolute;
          }
          .home-vector0737 {
            top: 125.38999938964844px;
            left: 31.71905517578125px;
            width: 20px;
            height: 51px;
            position: absolute;
          }
          .home-vector0738 {
            top: 103.25001525878906px;
            left: 39.739044189453125px;
            width: 20px;
            height: 51px;
            position: absolute;
          }
          .home-vector0739 {
            top: 81.03999328613281px;
            left: 46.439239501953125px;
            width: 20px;
            height: 51px;
            position: absolute;
          }
          .home-vector0740 {
            top: 55.18000793457031px;
            left: 58.467254638671875px;
            width: 14px;
            height: 53px;
            position: absolute;
          }
          .home-vector0741 {
            top: 35.11000061035156px;
            left: 74.21804809570312px;
            width: 9px;
            height: 54px;
            position: absolute;
          }
          .home-vector0742 {
            top: 63.47001647949219px;
            left: 74.39999389648438px;
            width: 44px;
            height: 35px;
            position: absolute;
          }
          .home-vector0743 {
            top: 85.81999206542969px;
            left: 69.6199951171875px;
            width: 49px;
            height: 33px;
            position: absolute;
          }
          .home-vector0744 {
            top: 109.66001892089844px;
            left: 63.480010986328125px;
            width: 49px;
            height: 33px;
            position: absolute;
          }
          .home-vector0745 {
            top: 137.66001892089844px;
            left: 53.839996337890625px;
            width: 49px;
            height: 33px;
            position: absolute;
          }
          .home-vector0746 {
            top: 86.12001037597656px;
            left: 43.709991455078125px;
            width: 33px;
            height: 110px;
            position: absolute;
          }
          .home-vector0747 {
            top: 182.25999450683594px;
            left: 24.6300048828125px;
            width: 50px;
            height: 50px;
            position: absolute;
          }
          .home-vector0748 {
            top: 181.75001525878906px;
            left: 20.1199951171875px;
            width: 59px;
            height: 8px;
            position: absolute;
          }
          .home-vector0749 {
            top: 189.4300079345703px;
            left: 20.790008544921875px;
            width: 59px;
            height: 1px;
            position: absolute;
          }
          .home-freepik-deviceinject5 {
            top: 61.439998626708984px;
            left: 147.69000244140625px;
            width: 213.44998168945312px;
            height: 417.1099853515625px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0750 {
            top: 0px;
            left: 1.44000244140625px;
            width: 211px;
            height: 417px;
            position: absolute;
          }
          .home-vector0751 {
            top: 3.3200035095214844px;
            left: 208.75px;
            width: 410px;
            height: 204px;
            position: absolute;
          }
          .home-vector0752 {
            top: 11.78000259399414px;
            left: 89.28999328613281px;
            width: 35px;
            height: 5px;
            position: absolute;
          }
          .home-vector0753 {
            top: 11.78000259399414px;
            left: 73.13999938964844px;
            width: 5px;
            height: 5px;
            position: absolute;
          }
          .home-vector0754 {
            top: 11.78000259399414px;
            left: 81.75999450683594px;
            width: 5px;
            height: 5px;
            position: absolute;
          }
          .home-vector0755 {
            top: 11.78000259399414px;
            left: 135.70001220703125px;
            width: 5px;
            height: 5px;
            position: absolute;
          }
          .home-vector0756 {
            top: 11.78000259399414px;
            left: 127.08001708984375px;
            width: 5px;
            height: 5px;
            position: absolute;
          }
          .home-vector0757 {
            top: 6.100002288818359px;
            left: 9.5px;
            width: 195px;
            height: 402px;
            position: absolute;
          }
          .home-vector0758 {
            top: 6.110004425048828px;
            left: 9.550003051757812px;
            width: 188px;
            height: 279px;
            position: absolute;
          }
          .home-vector0759 {
            top: 282.3999938964844px;
            left: 118.43026733398438px;
            width: 86px;
            height: 126px;
            position: absolute;
          }
          .home-vector0760 {
            top: 138.59999084472656px;
            left: 213.44998168945312px;
            width: 1px;
            height: 48px;
            position: absolute;
          }
          .home-vector0761 {
            top: 120.19999694824219px;
            left: 0px;
            width: 1px;
            height: 30px;
            position: absolute;
          }
          .home-vector0762 {
            top: 80.55999755859375px;
            left: 0px;
            width: 1px;
            height: 30px;
            position: absolute;
          }
          .home-vector0763 {
            top: 50.79000473022461px;
            left: 0.1999969482421875px;
            width: 1px;
            height: 14px;
            position: absolute;
          }
          .home-vector0764 {
            top: 19.700000762939453px;
            left: 156.79000854492188px;
            width: 1px;
            height: 2px;
            position: absolute;
          }
          .home-vector0765 {
            top: 18.799999237060547px;
            left: 159.14999389648438px;
            width: 1px;
            height: 3px;
            position: absolute;
          }
          .home-vector0766 {
            top: 18.119998931884766px;
            left: 161.5px;
            width: 1px;
            height: 4px;
            position: absolute;
          }
          .home-vector0767 {
            top: 16.810001373291016px;
            left: 163.8599853515625px;
            width: 1px;
            height: 5px;
            position: absolute;
          }
          .home-vector0768 {
            top: 17.172924041748047px;
            left: 178.8800048828125px;
            width: 9px;
            height: 5px;
            position: absolute;
          }
          .home-vector0769 {
            top: 18.04000473022461px;
            left: 179.739990234375px;
            width: 6px;
            height: 3px;
            position: absolute;
          }
          .home-vector0770 {
            top: 21.029903411865234px;
            left: 171.16989135742188px;
            width: 1px;
            height: 1px;
            position: absolute;
          }
          .home-vector0771 {
            top: 19.529918670654297px;
            left: 169.88998413085938px;
            width: 4px;
            height: 1px;
            position: absolute;
          }
          .home-vector0772 {
            top: 18.01986312866211px;
            left: 168.82000732421875px;
            width: 6px;
            height: 2px;
            position: absolute;
          }
          .home-vector0773 {
            top: 16.441936492919922px;
            left: 167.67999267578125px;
            width: 8px;
            height: 2px;
            position: absolute;
          }
          .home-vector0774 {
            top: 177.2178192138672px;
            left: 95.25564575195312px;
            width: 51px;
            height: 51px;
            position: absolute;
          }
          .home-vector0775 {
            top: 101.27000427246094px;
            left: 38.02000427246094px;
            width: 16px;
            height: 21px;
            position: absolute;
          }
          .home-vector0776 {
            top: 101.33903503417969px;
            left: 56.80999755859375px;
            width: 15px;
            height: 21px;
            position: absolute;
          }
          .home-vector0777 {
            top: 106.42996215820312px;
            left: 75.30970764160156px;
            width: 3px;
            height: 16px;
            position: absolute;
          }
          .home-vector0778 {
            top: 101.27000427246094px;
            left: 81.44000244140625px;
            width: 16px;
            height: 21px;
            position: absolute;
          }
          .home-vector0779 {
            top: 101.27000427246094px;
            left: 100.83000183105469px;
            width: 16px;
            height: 21px;
            position: absolute;
          }
          .home-vector0780 {
            top: 51.43000411987305px;
            left: 29.719940185546875px;
            width: 158px;
            height: 26px;
            position: absolute;
          }
          .home-vector0781 {
            top: 59.6099967956543px;
            left: 166.42001342773438px;
            width: 10px;
            height: 10px;
            position: absolute;
          }
          .home-vector0782 {
            top: 67.03939819335938px;
            left: 174.36636352539062px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector0783 {
            top: 101.112548828125px;
            left: 145.91067504882812px;
            width: 31px;
            height: 19px;
            position: absolute;
          }
          .home-vector0784 {
            top: 100.83854675292969px;
            left: 145.44866943359375px;
            width: 32px;
            height: 20px;
            position: absolute;
          }
          .home-vector0785 {
            top: 116.30000305175781px;
            left: 155.8599853515625px;
            width: 3px;
            height: 5px;
            position: absolute;
          }
          .home-vector0786 {
            top: 115.79586791992188px;
            left: 155.32662963867188px;
            width: 4px;
            height: 6px;
            position: absolute;
          }
          .home-vector0787 {
            top: 116.30000305175781px;
            left: 160.47000122070312px;
            width: 3px;
            height: 5px;
            position: absolute;
          }
          .home-vector0788 {
            top: 115.79586791992188px;
            left: 159.93661499023438px;
            width: 4px;
            height: 6px;
            position: absolute;
          }
          .home-vector0789 {
            top: 116.30000305175781px;
            left: 165.07998657226562px;
            width: 3px;
            height: 5px;
            position: absolute;
          }
          .home-vector0790 {
            top: 115.79719543457031px;
            left: 164.54702758789062px;
            width: 4px;
            height: 6px;
            position: absolute;
          }
          .home-vector0791 {
            top: 123.16999816894531px;
            left: 150.51998901367188px;
            width: 3px;
            height: 5px;
            position: absolute;
          }
          .home-vector0792 {
            top: 122.62451171875px;
            left: 150.0137939453125px;
            width: 4px;
            height: 6px;
            position: absolute;
          }
          .home-vector0793 {
            top: 123.16999816894531px;
            left: 155.1300048828125px;
            width: 3px;
            height: 5px;
            position: absolute;
          }
          .home-vector0794 {
            top: 122.62326049804688px;
            left: 154.623779296875px;
            width: 4px;
            height: 6px;
            position: absolute;
          }
          .home-vector0795 {
            top: 123.16999816894531px;
            left: 159.739990234375px;
            width: 3px;
            height: 5px;
            position: absolute;
          }
          .home-vector0796 {
            top: 122.62451171875px;
            left: 159.23379516601562px;
            width: 4px;
            height: 6px;
            position: absolute;
          }
          .home-vector0797 {
            top: 123.27000427246094px;
            left: 164.54998779296875px;
            width: 3px;
            height: 5px;
            position: absolute;
          }
          .home-vector0798 {
            top: 122.73612976074219px;
            left: 164.03427124023438px;
            width: 4px;
            height: 6px;
            position: absolute;
          }
          .home-vector0799 {
            top: 323.7200012207031px;
            left: 84.08000183105469px;
            width: 8px;
            height: 8px;
            position: absolute;
          }
          .home-vector0800 {
            top: 323.7200012207031px;
            left: 98.25px;
            width: 8px;
            height: 8px;
            position: absolute;
          }
          .home-vector0801 {
            top: 323.7200012207031px;
            left: 112.41998291015625px;
            width: 8px;
            height: 8px;
            position: absolute;
          }
          .home-vector0802 {
            top: 323.7200012207031px;
            left: 126.58999633789062px;
            width: 8px;
            height: 8px;
            position: absolute;
          }
          .home-vector0803 {
            top: 349.0400085449219px;
            left: 27.919998168945312px;
            width: 34px;
            height: 34px;
            position: absolute;
          }
          .home-vector0804 {
            top: 348.7200012207031px;
            left: 70.489990234375px;
            width: 34px;
            height: 34px;
            position: absolute;
          }
          .home-vector0805 {
            top: 348.4100036621094px;
            left: 113.05999755859375px;
            width: 34px;
            height: 34px;
            position: absolute;
          }
          .home-vector0806 {
            top: 349.0400085449219px;
            left: 155.6300048828125px;
            width: 34px;
            height: 34px;
            position: absolute;
          }
          .home-vector0807 {
            top: 275.1099853515625px;
            left: 27.919998168945312px;
            width: 34px;
            height: 34px;
            position: absolute;
          }
          .home-vector0808 {
            top: 274.7900085449219px;
            left: 70.489990234375px;
            width: 34px;
            height: 34px;
            position: absolute;
          }
          .home-vector0809 {
            top: 274.4700012207031px;
            left: 113.05999755859375px;
            width: 34px;
            height: 34px;
            position: absolute;
          }
          .home-vector0810 {
            top: 274.1600036621094px;
            left: 155.6300048828125px;
            width: 34px;
            height: 34px;
            position: absolute;
          }
          .home-vector0811 {
            top: 283.6499938964844px;
            left: 36.44999694824219px;
            width: 17px;
            height: 17px;
            position: absolute;
          }
          .home-vector0812 {
            top: 356.3787841796875px;
            left: 122.16998291015625px;
            width: 17px;
            height: 17px;
            position: absolute;
          }
          .home-vector0813 {
            top: 361.0947570800781px;
            left: 126.6287841796875px;
            width: 8px;
            height: 8px;
            position: absolute;
          }
          .home-vector0814 {
            top: 358.52203369140625px;
            left: 37.15692138671875px;
            width: 16px;
            height: 15px;
            position: absolute;
          }
          .home-vector0815 {
            top: 360.6499938964844px;
            left: 177.04998779296875px;
            width: 2px;
            height: 2px;
            position: absolute;
          }
          .home-vector0816 {
            top: 361.6399841308594px;
            left: 169.42001342773438px;
            width: 8px;
            height: 8px;
            position: absolute;
          }
          .home-vector0817 {
            top: 357.6099853515625px;
            left: 165.02999877929688px;
            width: 17px;
            height: 17px;
            position: absolute;
          }
          .home-vector0818 {
            top: 357.4800109863281px;
            left: 79.2537841796875px;
            width: 17px;
            height: 17px;
            position: absolute;
          }
          .home-vector0819 {
            top: 131.5699920654297px;
            left: 39.58000183105469px;
            width: 72px;
            height: 1px;
            position: absolute;
          }
          .home-vector0820 {
            top: 283.67156982421875px;
            left: 80.40800476074219px;
            width: 14px;
            height: 16px;
            position: absolute;
          }
          .home-vector0821 {
            top: 285.4283447265625px;
            left: 119.86569213867188px;
            width: 22px;
            height: 12px;
            position: absolute;
          }
          .home-vector0822 {
            top: 295.7399597167969px;
            left: 172.85000610351562px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector0823 {
            top: 292.5623474121094px;
            left: 170.15103149414062px;
            width: 8px;
            height: 3px;
            position: absolute;
          }
          .home-vector0824 {
            top: 284.30963134765625px;
            left: 165.38375854492188px;
            width: 18px;
            height: 5px;
            position: absolute;
          }
          .home-vector0825 {
            top: 288.34619140625px;
            left: 167.29104614257812px;
            width: 14px;
            height: 4px;
            position: absolute;
          }
          .home-freepik-characterinject5 {
            top: 101.95954132080078px;
            left: 57.939998626708984px;
            width: 146.39999389648438px;
            height: 377.0104675292969px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0826 {
            top: 344.15045166015625px;
            left: 39.8900032043457px;
            width: 41px;
            height: 33px;
            position: absolute;
          }
          .home-vector0827 {
            top: 363.45635986328125px;
            left: 46.03671646118164px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector0828 {
            top: 373.68048095703125px;
            left: 40.6400032043457px;
            width: 40px;
            height: 3px;
            position: absolute;
          }
          .home-vector0829 {
            top: 364.6145935058594px;
            left: 56.66921615600586px;
            width: 4px;
            height: 3px;
            position: absolute;
          }
          .home-vector0830 {
            top: 366.3740539550781px;
            left: 62.03981399536133px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector0831 {
            top: 368.0699157714844px;
            left: 66.88079833984375px;
            width: 2px;
            height: 3px;
            position: absolute;
          }
          .home-vector0832 {
            top: 359.3157958984375px;
            left: 55.72450637817383px;
            width: 4px;
            height: 1px;
            position: absolute;
          }
          .home-vector0833 {
            top: 319.5104675292969px;
            left: 0.01000213623046875px;
            width: 37px;
            height: 51px;
            position: absolute;
          }
          .home-vector0834 {
            top: 338.2352294921875px;
            left: 11.689037322998047px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector0835 {
            top: 341.4504699707031px;
            left: 0px;
            width: 31px;
            height: 29px;
            position: absolute;
          }
          .home-vector0836 {
            top: 346.9718017578125px;
            left: 18.485393524169922px;
            width: 4px;
            height: 1px;
            position: absolute;
          }
          .home-vector0837 {
            top: 351.7587585449219px;
            left: 20.771312713623047px;
            width: 4px;
            height: 1px;
            position: absolute;
          }
          .home-vector0838 {
            top: 356.1284484863281px;
            left: 23.08907699584961px;
            width: 3px;
            height: 2px;
            position: absolute;
          }
          .home-vector0839 {
            top: 341.8200378417969px;
            left: 22.368701934814453px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector0840 {
            top: 118.28046417236328px;
            left: 98.52000427246094px;
            width: 28px;
            height: 26px;
            position: absolute;
          }
          .home-vector0841 {
            top: 91.77239227294922px;
            left: 109.30000305175781px;
            width: 37px;
            height: 25px;
            position: absolute;
          }
          .home-vector0842 {
            top: 94.81636810302734px;
            left: 139.26109313964844px;
            width: 1px;
            height: 1px;
            position: absolute;
          }
          .home-vector0843 {
            top: 92.65166473388672px;
            left: 110.97000122070312px;
            width: 35px;
            height: 21px;
            position: absolute;
          }
          .home-vector0844 {
            top: 98.66300201416016px;
            left: 113.25358581542969px;
            width: 25px;
            height: 25px;
            position: absolute;
          }
          .home-vector0845 {
            top: 118.23046112060547px;
            left: 116.51107788085938px;
            width: 9px;
            height: 5px;
            position: absolute;
          }
          .home-vector0846 {
            top: 116.72551727294922px;
            left: 121.70506286621094px;
            width: 3px;
            height: 4px;
            position: absolute;
          }
          .home-vector0847 {
            top: 112.72774505615234px;
            left: 126.24917602539062px;
            width: 3px;
            height: 4px;
            position: absolute;
          }
          .home-vector0848 {
            top: 108.86319732666016px;
            left: 130.9499969482422px;
            width: 2px;
            height: 5px;
            position: absolute;
          }
          .home-vector0849 {
            top: 7.429649353027344px;
            left: 69.08924865722656px;
            width: 37px;
            height: 87px;
            position: absolute;
          }
          .home-vector0850 {
            top: 58.17046356201172px;
            left: 80.75px;
            width: 13px;
            height: 8px;
            position: absolute;
          }
          .home-vector0851 {
            top: 33.85985565185547px;
            left: 99.23995971679688px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector0852 {
            top: 29.42902374267578px;
            left: 97.32060241699219px;
            width: 6px;
            height: 2px;
            position: absolute;
          }
          .home-vector0853 {
            top: 33.53990936279297px;
            left: 84.51997375488281px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector0854 {
            top: 28.74022674560547px;
            left: 81.51612854003906px;
            width: 6px;
            height: 2px;
            position: absolute;
          }
          .home-vector0855 {
            top: 29.81995391845703px;
            left: 92.38999938964844px;
            width: 4px;
            height: 14px;
            position: absolute;
          }
          .home-vector0856 {
            top: 22.5244140625px;
            left: 80.36102294921875px;
            width: 7px;
            height: 2px;
            position: absolute;
          }
          .home-vector0857 {
            top: 25.568527221679688px;
            left: 96.64849853515625px;
            width: 7px;
            height: 2px;
            position: absolute;
          }
          .home-vector0858 {
            top: 34.799034118652344px;
            left: 62.640995025634766px;
            width: 7px;
            height: 11px;
            position: absolute;
          }
          .home-vector0859 {
            top: 37.095314025878906px;
            left: 64.49000549316406px;
            width: 3px;
            height: 6px;
            position: absolute;
          }
          .home-vector0860 {
            top: 44.038124084472656px;
            left: 87.83709716796875px;
            width: 4px;
            height: 5px;
            position: absolute;
          }
          .home-vector0861 {
            top: 167.41046142578125px;
            left: 31.240001678466797px;
            width: 51px;
            height: 192px;
            position: absolute;
          }
          .home-vector0862 {
            top: 167.970458984375px;
            left: 9.34000015258789px;
            width: 85px;
            height: 175px;
            position: absolute;
          }
          .home-vector0863 {
            top: 198.69046020507812px;
            left: 65.08218383789062px;
            width: 13px;
            height: 110px;
            position: absolute;
          }
          .home-vector0864 {
            top: 252.04046630859375px;
            left: 36.150394439697266px;
            width: 2px;
            height: 93px;
            position: absolute;
          }
          .home-vector0865 {
            top: 196.61538696289062px;
            left: 42.5993766784668px;
            width: 19px;
            height: 10px;
            position: absolute;
          }
          .home-vector0866 {
            top: 121.04045867919922px;
            left: 94.33660888671875px;
            width: 26px;
            height: 35px;
            position: absolute;
          }
          .home-vector0867 {
            top: 58.450462341308594px;
            left: 31.10000228881836px;
            width: 68px;
            height: 136px;
            position: absolute;
          }
          .home-vector0868 {
            top: 70.2504653930664px;
            left: 26.507915496826172px;
            width: 33px;
            height: 116px;
            position: absolute;
          }
          .home-vector0869 {
            top: 180.93649291992188px;
            left: 43.873233795166016px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .home-vector0870 {
            top: 70.26045989990234px;
            left: 26.288890838623047px;
            width: 33px;
            height: 116px;
            position: absolute;
          }
          .home-vector0871 {
            top: 66.72045135498047px;
            left: 66.41999816894531px;
            width: 26px;
            height: 22px;
            position: absolute;
          }
          .home-vector0872 {
            top: 78.66045379638672px;
            left: 93.06166076660156px;
            width: 4px;
            height: 9px;
            position: absolute;
          }
          .home-vector0873 {
            top: 80.2404556274414px;
            left: 85.47010803222656px;
            width: 8px;
            height: 100px;
            position: absolute;
          }
          .home-vector0874 {
            top: 102.64046478271484px;
            left: 95.99345397949219px;
            width: 4px;
            height: 57px;
            position: absolute;
          }
          .home-vector0875 {
            top: 73.43451690673828px;
            left: 49.559940338134766px;
            width: 13px;
            height: 14px;
            position: absolute;
          }
          .home-group45 {
            top: 125.83045196533203px;
            left: 96.6300048828125px;
            width: 3.180159330368042px;
            height: 30.000015258789062px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0876 {
            top: 0px;
            left: 0px;
            width: 3px;
            height: 30px;
            position: absolute;
          }
          .home-group46 {
            top: 101.2004623413086px;
            left: 51.379276275634766px;
            width: 10.580728530883789px;
            height: 85.04998779296875px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0877 {
            top: 0px;
            left: 0px;
            width: 11px;
            height: 85px;
            position: absolute;
          }
          .home-vector0878 {
            top: 0px;
            left: 61.68271255493164px;
            width: 52px;
            height: 38px;
            position: absolute;
          }
          .home-vector0879 {
            top: 115.01947784423828px;
            left: 30.09994888305664px;
            width: 25px;
            height: 7px;
            position: absolute;
          }
          .home-vector0880 {
            top: 75.9404525756836px;
            left: 33.971744537353516px;
            width: 14px;
            height: 109px;
            position: absolute;
          }
          .home-vector0881 {
            top: 154.42047119140625px;
            left: 31.22000503540039px;
            width: 22px;
            height: 4px;
            position: absolute;
          }
          .home-vector0882 {
            top: 80.1172866821289px;
            left: 38.810001373291016px;
            width: 23px;
            height: 11px;
            position: absolute;
          }
          .home-vector0883 {
            top: 68.17046356201172px;
            left: 58.08982467651367px;
            width: 14px;
            height: 120px;
            position: absolute;
          }
          .home-vector0884 {
            top: 160.21047973632812px;
            left: 54.86000442504883px;
            width: 32px;
            height: 7px;
            position: absolute;
          }
          .home-vector0885 {
            top: 128.16619873046875px;
            left: 53.309993743896484px;
            width: 36px;
            height: 3px;
            position: absolute;
          }
          .home-vector0886 {
            top: 99.07479095458984px;
            left: 58.79999923706055px;
            width: 33px;
            height: 1px;
            position: absolute;
          }
          .home-vector0887 {
            top: 69.82295989990234px;
            left: 54.630001068115234px;
            width: 16px;
            height: 5px;
            position: absolute;
          }
          .home-vector0888 {
            top: 60.84046173095703px;
            left: 67.43000793457031px;
            width: 23px;
            height: 20px;
            position: absolute;
          }
          .home-vector0889 {
            top: 70.34046173095703px;
            left: 77.50999450683594px;
            width: 6px;
            height: 7px;
            position: absolute;
          }
          .home-vector0890 {
            top: 99.19591522216797px;
            left: 92.30999755859375px;
            width: 7px;
            height: 1px;
            position: absolute;
          }
          .home-vector0891 {
            top: 132.84371948242188px;
            left: 89.83000183105469px;
            width: 7px;
            height: 1px;
            position: absolute;
          }
          .home-vector0892 {
            top: 87.81046295166016px;
            left: 91.62777709960938px;
            width: 5px;
            height: 106px;
            position: absolute;
          }
          .home-vector0893 {
            top: 166.5904541015625px;
            left: 86.61000061035156px;
            width: 10px;
            height: 2px;
            position: absolute;
          }
          .home-vector0894 {
            top: 127.10045623779297px;
            left: 97.44000244140625px;
            width: 18px;
            height: 12px;
            position: absolute;
          }
          .home-vector0895 {
            top: 125.04045867919922px;
            left: 102.11000061035156px;
            width: 10px;
            height: 15px;
            position: absolute;
          }
          .home-freepik-floorinject5 {
            top: 478.1000061035156px;
            left: 37.470001220703125px;
            width: 425.05999755859375px;
            height: 0.519989013671875px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0896 {
            top: 0px;
            left: 0px;
            width: 425px;
            height: 1px;
            position: absolute;
          }
          .home-homescreenpana3 {
            top: 1990px;
            left: 171px;
            width: 500px;
            height: 500px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-freepikbackgroundcompleteinject51 {
            top: 25.200000762939453px;
            left: 36.22999954223633px;
            width: 422.8699951171875px;
            height: 453.3499755859375px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0897 {
            top: 261.7799987792969px;
            left: 32.8900032043457px;
            width: 96px;
            height: 182px;
            position: absolute;
          }
          .home-vector0898 {
            top: 261.7799987792969px;
            left: 4.279998779296875px;
            width: 96px;
            height: 182px;
            position: absolute;
          }
          .home-vector0899 {
            top: 270.40997314453125px;
            left: 10.830001831054688px;
            width: 83px;
            height: 29px;
            position: absolute;
          }
          .home-vector0900 {
            top: 270.90997314453125px;
            left: 37.070003509521484px;
            width: 31px;
            height: 6px;
            position: absolute;
          }
          .home-vector0901 {
            top: 307.0999755859375px;
            left: 10.830001831054688px;
            width: 83px;
            height: 29px;
            position: absolute;
          }
          .home-vector0902 {
            top: 307.6099853515625px;
            left: 37.070003509521484px;
            width: 31px;
            height: 6px;
            position: absolute;
          }
          .home-vector0903 {
            top: 343.79998779296875px;
            left: 10.830001831054688px;
            width: 83px;
            height: 29px;
            position: absolute;
          }
          .home-vector0904 {
            top: 344.30999755859375px;
            left: 37.070003509521484px;
            width: 31px;
            height: 6px;
            position: absolute;
          }
          .home-vector0905 {
            top: 380.5px;
            left: 10.830001831054688px;
            width: 83px;
            height: 29px;
            position: absolute;
          }
          .home-vector0906 {
            top: 380.989990234375px;
            left: 37.06975173950195px;
            width: 31px;
            height: 6px;
            position: absolute;
          }
          .home-vector0907 {
            top: 254.9600067138672px;
            left: 0px;
            width: 105px;
            height: 9px;
            position: absolute;
          }
          .home-vector0908 {
            top: 254.9600067138672px;
            left: 104.73001098632812px;
            width: 31px;
            height: 9px;
            position: absolute;
          }
          .home-vector0909 {
            top: 444.03997802734375px;
            left: 4.279998779296875px;
            width: 5px;
            height: 9px;
            position: absolute;
          }
          .home-vector0910 {
            top: 444.03997802734375px;
            left: 35.57999801635742px;
            width: 5px;
            height: 9px;
            position: absolute;
          }
          .home-vector0911 {
            top: 444.03997802734375px;
            left: 92.77000427246094px;
            width: 5px;
            height: 9px;
            position: absolute;
          }
          .home-vector0912 {
            top: 444.03997802734375px;
            left: 121.36000061035156px;
            width: 5px;
            height: 9px;
            position: absolute;
          }
          .home-vector0913 {
            top: 230.72000122070312px;
            left: 92.3800048828125px;
            width: 11px;
            height: 25px;
            position: absolute;
          }
          .home-vector0914 {
            top: 207.65000915527344px;
            left: 56.8599967956543px;
            width: 39px;
            height: 49px;
            position: absolute;
          }
          .home-vector0915 {
            top: 211.27000427246094px;
            left: 60.8900032043457px;
            width: 29px;
            height: 41px;
            position: absolute;
          }
          .home-vector0916 {
            top: 217.1300048828125px;
            left: 67.24000549316406px;
            width: 17px;
            height: 28px;
            position: absolute;
          }
          .home-vector0917 {
            top: 22.049999237060547px;
            left: 284.41998291015625px;
            width: 129px;
            height: 232px;
            position: absolute;
          }
          .home-vector0918 {
            top: 28.790000915527344px;
            left: 289.5799865722656px;
            width: 118px;
            height: 219px;
            position: absolute;
          }
          .home-vector0919 {
            top: 18.110000610351562px;
            left: 413.6999816894531px;
            width: 5px;
            height: 238px;
            position: absolute;
          }
          .home-vector0920 {
            top: 91.66999816894531px;
            left: 289.5799865722656px;
            width: 120px;
            height: 2px;
            position: absolute;
          }
          .home-vector0921 {
            top: 143.72999572753906px;
            left: 289.5799865722656px;
            width: 120px;
            height: 2px;
            position: absolute;
          }
          .home-vector0922 {
            top: 195.77999877929688px;
            left: 289.5799865722656px;
            width: 120px;
            height: 2px;
            position: absolute;
          }
          .home-vector0923 {
            top: 253.5800018310547px;
            left: 345.41998291015625px;
            width: 161px;
            height: 6px;
            position: absolute;
          }
          .home-vector0924 {
            top: 28.790000915527344px;
            left: 312.22998046875px;
            width: 3px;
            height: 64px;
            position: absolute;
          }
          .home-vector0925 {
            top: 28.790000915527344px;
            left: 335.4499816894531px;
            width: 3px;
            height: 64px;
            position: absolute;
          }
          .home-vector0926 {
            top: 28.790000915527344px;
            left: 358.66998291015625px;
            width: 3px;
            height: 64px;
            position: absolute;
          }
          .home-vector0927 {
            top: 28.790000915527344px;
            left: 381.8899841308594px;
            width: 3px;
            height: 64px;
            position: absolute;
          }
          .home-vector0928 {
            top: 18.110000610351562px;
            left: 278.9499816894531px;
            width: 5px;
            height: 238px;
            position: absolute;
          }
          .home-vector0929 {
            top: 15.71999740600586px;
            left: 278.9499816894531px;
            width: 140px;
            height: 6px;
            position: absolute;
          }
          .home-vector0930 {
            top: 257.17999267578125px;
            left: 275.0699768066406px;
            width: 148px;
            height: 6px;
            position: absolute;
          }
          .home-vector0931 {
            top: 254.3000030517578px;
            left: 275.0699768066406px;
            width: 148px;
            height: 3px;
            position: absolute;
          }
          .home-vector0932 {
            top: 19.59000015258789px;
            left: 63.77000045776367px;
            width: 72px;
            height: 72px;
            position: absolute;
          }
          .home-vector0933 {
            top: 42.0022087097168px;
            left: 86.97805786132812px;
            width: 27px;
            height: 27px;
            position: absolute;
          }
          .home-vector0934 {
            top: 19.31999969482422px;
            left: 63.4900016784668px;
            width: 73px;
            height: 73px;
            position: absolute;
          }
          .home-vector0935 {
            top: 0.1399993896484375px;
            left: 146.48001098632812px;
            width: 43px;
            height: 43px;
            position: absolute;
          }
          .home-vector0936 {
            top: 13.551799774169922px;
            left: 160.35617065429688px;
            width: 16px;
            height: 16px;
            position: absolute;
          }
          .home-vector0937 {
            top: 0px;
            left: 146.35000610351562px;
            width: 44px;
            height: 43px;
            position: absolute;
          }
          .home-vector0938 {
            top: 112.75px;
            left: 9.830001831054688px;
            width: 82px;
            height: 85px;
            position: absolute;
          }
          .home-vector0939 {
            top: 112.75px;
            left: 4.290000915527344px;
            width: 82px;
            height: 85px;
            position: absolute;
          }
          .home-vector0940 {
            top: 124.22000122070312px;
            left: 15.290000915527344px;
            width: 60px;
            height: 62px;
            position: absolute;
          }
          .home-vector0941 {
            top: 187.02999877929688px;
            left: 4.369998931884766px;
            width: 11px;
            height: 11px;
            position: absolute;
          }
          .home-vector0942 {
            top: 186.8800048828125px;
            left: 75.14999389648438px;
            width: 11px;
            height: 11px;
            position: absolute;
          }
          .home-vector0943 {
            top: 113.6300048828125px;
            left: 74.99000549316406px;
            width: 11px;
            height: 11px;
            position: absolute;
          }
          .home-vector0944 {
            top: 113.62001037597656px;
            left: 4.369998931884766px;
            width: 11px;
            height: 11px;
            position: absolute;
          }
          .home-vector0945 {
            top: 123.83000183105469px;
            left: 15.240001678466797px;
            width: 60px;
            height: 63px;
            position: absolute;
          }
          .home-vector0946 {
            top: 150.29000854492188px;
            left: 31.06557846069336px;
            width: 15px;
            height: 15px;
            position: absolute;
          }
          .home-vector0947 {
            top: 150.27757263183594px;
            left: 46.2599983215332px;
            width: 15px;
            height: 16px;
            position: absolute;
          }
          .home-vector0948 {
            top: 141.8000030517578px;
            left: 40.360103607177734px;
            width: 10px;
            height: 24px;
            position: absolute;
          }
          .home-freepik-plantinject51 {
            top: 246.72999572753906px;
            left: 338.44000244140625px;
            width: 118.27999877929688px;
            height: 232.47999572753906px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0949 {
            top: 125.96000671386719px;
            left: 3.660003662109375px;
            width: 44px;
            height: 45px;
            position: absolute;
          }
          .home-vector0950 {
            top: 97.40000915527344px;
            left: 2.540008544921875px;
            width: 44px;
            height: 45px;
            position: absolute;
          }
          .home-vector0951 {
            top: 69.47001647949219px;
            left: 0px;
            width: 44px;
            height: 45px;
            position: absolute;
          }
          .home-vector0952 {
            top: 34.38999938964844px;
            left: 1.91998291015625px;
            width: 38px;
            height: 51px;
            position: absolute;
          }
          .home-vector0953 {
            top: 0px;
            left: 17.0697021484375px;
            width: 18px;
            height: 63px;
            position: absolute;
          }
          .home-vector0954 {
            top: 10.729995727539062px;
            left: 37.55999755859375px;
            width: 31px;
            height: 63px;
            position: absolute;
          }
          .home-vector0955 {
            top: 35.02000427246094px;
            left: 41.04998779296875px;
            width: 38px;
            height: 62px;
            position: absolute;
          }
          .home-vector0956 {
            top: 64.44001770019531px;
            left: 44.91998291015625px;
            width: 38px;
            height: 62px;
            position: absolute;
          }
          .home-vector0957 {
            top: 100.28999328613281px;
            left: 46.8699951171875px;
            width: 38px;
            height: 62px;
            position: absolute;
          }
          .home-vector0958 {
            top: 58.21000671386719px;
            left: 34.67999267578125px;
            width: 13px;
            height: 138px;
            position: absolute;
          }
          .home-group47 {
            top: 125.96000671386719px;
            left: 3.660003662109375px;
            width: 43.639984130859375px;
            height: 45px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0959 {
            top: 0px;
            left: 0px;
            width: 44px;
            height: 45px;
            position: absolute;
          }
          .home-group48 {
            top: 97.40000915527344px;
            left: 2.540008544921875px;
            width: 43.649993896484375px;
            height: 45px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0960 {
            top: 0px;
            left: 0px;
            width: 44px;
            height: 45px;
            position: absolute;
          }
          .home-group49 {
            top: 69.47001647949219px;
            left: 0px;
            width: 43.649993896484375px;
            height: 45px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0961 {
            top: 0px;
            left: 0px;
            width: 44px;
            height: 45px;
            position: absolute;
          }
          .home-group50 {
            top: 34.38999938964844px;
            left: 1.91998291015625px;
            width: 38px;
            height: 50.75px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0962 {
            top: 0px;
            left: 0px;
            width: 38px;
            height: 51px;
            position: absolute;
          }
          .home-group51 {
            top: 0px;
            left: 17.0697021484375px;
            width: 18.054922103881836px;
            height: 62.50999450683594px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0963 {
            top: 0px;
            left: 0px;
            width: 18px;
            height: 63px;
            position: absolute;
          }
          .home-group52 {
            top: 10.729995727539062px;
            left: 37.55999755859375px;
            width: 31.239990234375px;
            height: 62.540008544921875px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0964 {
            top: 0px;
            left: 0px;
            width: 31px;
            height: 63px;
            position: absolute;
          }
          .home-group53 {
            top: 35.02000427246094px;
            left: 41.04998779296875px;
            width: 37.680023193359375px;
            height: 62.420013427734375px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0965 {
            top: 0px;
            left: 0px;
            width: 38px;
            height: 62px;
            position: absolute;
          }
          .home-group54 {
            top: 64.44001770019531px;
            left: 44.91998291015625px;
            width: 37.69000244140625px;
            height: 62.40997314453125px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0966 {
            top: 0px;
            left: 0px;
            width: 38px;
            height: 62px;
            position: absolute;
          }
          .home-group55 {
            top: 100.28999328613281px;
            left: 46.8699951171875px;
            width: 37.69000244140625px;
            height: 62.410003662109375px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0967 {
            top: 0px;
            left: 0px;
            width: 38px;
            height: 62px;
            position: absolute;
          }
          .home-vector0968 {
            top: 125.38999938964844px;
            left: 31.71905517578125px;
            width: 20px;
            height: 51px;
            position: absolute;
          }
          .home-vector0969 {
            top: 103.25001525878906px;
            left: 39.739044189453125px;
            width: 20px;
            height: 51px;
            position: absolute;
          }
          .home-vector0970 {
            top: 81.03999328613281px;
            left: 46.439239501953125px;
            width: 20px;
            height: 51px;
            position: absolute;
          }
          .home-vector0971 {
            top: 55.18000793457031px;
            left: 58.467254638671875px;
            width: 14px;
            height: 53px;
            position: absolute;
          }
          .home-vector0972 {
            top: 35.11000061035156px;
            left: 74.21804809570312px;
            width: 9px;
            height: 54px;
            position: absolute;
          }
          .home-vector0973 {
            top: 63.47001647949219px;
            left: 74.39999389648438px;
            width: 44px;
            height: 35px;
            position: absolute;
          }
          .home-vector0974 {
            top: 85.81999206542969px;
            left: 69.6199951171875px;
            width: 49px;
            height: 33px;
            position: absolute;
          }
          .home-vector0975 {
            top: 109.66001892089844px;
            left: 63.480010986328125px;
            width: 49px;
            height: 33px;
            position: absolute;
          }
          .home-vector0976 {
            top: 137.66001892089844px;
            left: 53.839996337890625px;
            width: 49px;
            height: 33px;
            position: absolute;
          }
          .home-vector0977 {
            top: 86.12001037597656px;
            left: 43.709991455078125px;
            width: 33px;
            height: 110px;
            position: absolute;
          }
          .home-vector0978 {
            top: 182.25999450683594px;
            left: 24.6300048828125px;
            width: 50px;
            height: 50px;
            position: absolute;
          }
          .home-vector0979 {
            top: 181.75001525878906px;
            left: 20.1199951171875px;
            width: 59px;
            height: 8px;
            position: absolute;
          }
          .home-vector0980 {
            top: 189.4300079345703px;
            left: 20.790008544921875px;
            width: 59px;
            height: 1px;
            position: absolute;
          }
          .home-freepik-deviceinject51 {
            top: 61.439998626708984px;
            left: 147.69000244140625px;
            width: 213.44998168945312px;
            height: 417.1099853515625px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector0981 {
            top: 0px;
            left: 1.44000244140625px;
            width: 211px;
            height: 417px;
            position: absolute;
          }
          .home-vector0982 {
            top: 3.3200035095214844px;
            left: 208.75px;
            width: 410px;
            height: 204px;
            position: absolute;
          }
          .home-vector0983 {
            top: 11.78000259399414px;
            left: 89.28999328613281px;
            width: 35px;
            height: 5px;
            position: absolute;
          }
          .home-vector0984 {
            top: 11.78000259399414px;
            left: 73.13999938964844px;
            width: 5px;
            height: 5px;
            position: absolute;
          }
          .home-vector0985 {
            top: 11.78000259399414px;
            left: 81.75999450683594px;
            width: 5px;
            height: 5px;
            position: absolute;
          }
          .home-vector0986 {
            top: 11.78000259399414px;
            left: 135.70001220703125px;
            width: 5px;
            height: 5px;
            position: absolute;
          }
          .home-vector0987 {
            top: 11.78000259399414px;
            left: 127.08001708984375px;
            width: 5px;
            height: 5px;
            position: absolute;
          }
          .home-vector0988 {
            top: 6.100002288818359px;
            left: 9.5px;
            width: 195px;
            height: 402px;
            position: absolute;
          }
          .home-vector0989 {
            top: 6.110004425048828px;
            left: 9.550003051757812px;
            width: 188px;
            height: 279px;
            position: absolute;
          }
          .home-vector0990 {
            top: 282.3999938964844px;
            left: 118.43026733398438px;
            width: 86px;
            height: 126px;
            position: absolute;
          }
          .home-vector0991 {
            top: 138.59999084472656px;
            left: 213.44998168945312px;
            width: 1px;
            height: 48px;
            position: absolute;
          }
          .home-vector0992 {
            top: 120.19999694824219px;
            left: 0px;
            width: 1px;
            height: 30px;
            position: absolute;
          }
          .home-vector0993 {
            top: 80.55999755859375px;
            left: 0px;
            width: 1px;
            height: 30px;
            position: absolute;
          }
          .home-vector0994 {
            top: 50.79000473022461px;
            left: 0.1999969482421875px;
            width: 1px;
            height: 14px;
            position: absolute;
          }
          .home-vector0995 {
            top: 19.700000762939453px;
            left: 156.79000854492188px;
            width: 1px;
            height: 2px;
            position: absolute;
          }
          .home-vector0996 {
            top: 18.799999237060547px;
            left: 159.14999389648438px;
            width: 1px;
            height: 3px;
            position: absolute;
          }
          .home-vector0997 {
            top: 18.119998931884766px;
            left: 161.5px;
            width: 1px;
            height: 4px;
            position: absolute;
          }
          .home-vector0998 {
            top: 16.810001373291016px;
            left: 163.8599853515625px;
            width: 1px;
            height: 5px;
            position: absolute;
          }
          .home-vector0999 {
            top: 17.172924041748047px;
            left: 178.8800048828125px;
            width: 9px;
            height: 5px;
            position: absolute;
          }
          .home-vector1000 {
            top: 18.04000473022461px;
            left: 179.739990234375px;
            width: 6px;
            height: 3px;
            position: absolute;
          }
          .home-vector1001 {
            top: 21.029903411865234px;
            left: 171.16989135742188px;
            width: 1px;
            height: 1px;
            position: absolute;
          }
          .home-vector1002 {
            top: 19.529918670654297px;
            left: 169.88998413085938px;
            width: 4px;
            height: 1px;
            position: absolute;
          }
          .home-vector1003 {
            top: 18.01986312866211px;
            left: 168.82000732421875px;
            width: 6px;
            height: 2px;
            position: absolute;
          }
          .home-vector1004 {
            top: 16.441936492919922px;
            left: 167.67999267578125px;
            width: 8px;
            height: 2px;
            position: absolute;
          }
          .home-vector1005 {
            top: 177.2178192138672px;
            left: 95.25564575195312px;
            width: 51px;
            height: 51px;
            position: absolute;
          }
          .home-vector1006 {
            top: 101.27000427246094px;
            left: 38.02000427246094px;
            width: 16px;
            height: 21px;
            position: absolute;
          }
          .home-vector1007 {
            top: 101.33903503417969px;
            left: 56.80999755859375px;
            width: 15px;
            height: 21px;
            position: absolute;
          }
          .home-vector1008 {
            top: 106.42996215820312px;
            left: 75.30970764160156px;
            width: 3px;
            height: 16px;
            position: absolute;
          }
          .home-vector1009 {
            top: 101.27000427246094px;
            left: 81.44000244140625px;
            width: 16px;
            height: 21px;
            position: absolute;
          }
          .home-vector1010 {
            top: 101.27000427246094px;
            left: 100.83000183105469px;
            width: 16px;
            height: 21px;
            position: absolute;
          }
          .home-vector1011 {
            top: 51.43000411987305px;
            left: 29.719940185546875px;
            width: 158px;
            height: 26px;
            position: absolute;
          }
          .home-vector1012 {
            top: 59.6099967956543px;
            left: 166.42001342773438px;
            width: 10px;
            height: 10px;
            position: absolute;
          }
          .home-vector1013 {
            top: 67.03939819335938px;
            left: 174.36636352539062px;
            width: 4px;
            height: 4px;
            position: absolute;
          }
          .home-vector1014 {
            top: 101.112548828125px;
            left: 145.91067504882812px;
            width: 31px;
            height: 19px;
            position: absolute;
          }
          .home-vector1015 {
            top: 100.83854675292969px;
            left: 145.44866943359375px;
            width: 32px;
            height: 20px;
            position: absolute;
          }
          .home-vector1016 {
            top: 116.30000305175781px;
            left: 155.8599853515625px;
            width: 3px;
            height: 5px;
            position: absolute;
          }
          .home-vector1017 {
            top: 115.79586791992188px;
            left: 155.32662963867188px;
            width: 4px;
            height: 6px;
            position: absolute;
          }
          .home-vector1018 {
            top: 116.30000305175781px;
            left: 160.47000122070312px;
            width: 3px;
            height: 5px;
            position: absolute;
          }
          .home-vector1019 {
            top: 115.79586791992188px;
            left: 159.93661499023438px;
            width: 4px;
            height: 6px;
            position: absolute;
          }
          .home-vector1020 {
            top: 116.30000305175781px;
            left: 165.07998657226562px;
            width: 3px;
            height: 5px;
            position: absolute;
          }
          .home-vector1021 {
            top: 115.79719543457031px;
            left: 164.54702758789062px;
            width: 4px;
            height: 6px;
            position: absolute;
          }
          .home-vector1022 {
            top: 123.16999816894531px;
            left: 150.51998901367188px;
            width: 3px;
            height: 5px;
            position: absolute;
          }
          .home-vector1023 {
            top: 122.62451171875px;
            left: 150.0137939453125px;
            width: 4px;
            height: 6px;
            position: absolute;
          }
          .home-vector1024 {
            top: 123.16999816894531px;
            left: 155.1300048828125px;
            width: 3px;
            height: 5px;
            position: absolute;
          }
          .home-vector1025 {
            top: 122.62326049804688px;
            left: 154.623779296875px;
            width: 4px;
            height: 6px;
            position: absolute;
          }
          .home-vector1026 {
            top: 123.16999816894531px;
            left: 159.739990234375px;
            width: 3px;
            height: 5px;
            position: absolute;
          }
          .home-vector1027 {
            top: 122.62451171875px;
            left: 159.23379516601562px;
            width: 4px;
            height: 6px;
            position: absolute;
          }
          .home-vector1028 {
            top: 123.27000427246094px;
            left: 164.54998779296875px;
            width: 3px;
            height: 5px;
            position: absolute;
          }
          .home-vector1029 {
            top: 122.73612976074219px;
            left: 164.03427124023438px;
            width: 4px;
            height: 6px;
            position: absolute;
          }
          .home-vector1030 {
            top: 323.7200012207031px;
            left: 84.08000183105469px;
            width: 8px;
            height: 8px;
            position: absolute;
          }
          .home-vector1031 {
            top: 323.7200012207031px;
            left: 98.25px;
            width: 8px;
            height: 8px;
            position: absolute;
          }
          .home-vector1032 {
            top: 323.7200012207031px;
            left: 112.41998291015625px;
            width: 8px;
            height: 8px;
            position: absolute;
          }
          .home-vector1033 {
            top: 323.7200012207031px;
            left: 126.58999633789062px;
            width: 8px;
            height: 8px;
            position: absolute;
          }
          .home-vector1034 {
            top: 349.0400085449219px;
            left: 27.919998168945312px;
            width: 34px;
            height: 34px;
            position: absolute;
          }
          .home-vector1035 {
            top: 348.7200012207031px;
            left: 70.489990234375px;
            width: 34px;
            height: 34px;
            position: absolute;
          }
          .home-vector1036 {
            top: 348.4100036621094px;
            left: 113.05999755859375px;
            width: 34px;
            height: 34px;
            position: absolute;
          }
          .home-vector1037 {
            top: 349.0400085449219px;
            left: 155.6300048828125px;
            width: 34px;
            height: 34px;
            position: absolute;
          }
          .home-vector1038 {
            top: 275.1099853515625px;
            left: 27.919998168945312px;
            width: 34px;
            height: 34px;
            position: absolute;
          }
          .home-vector1039 {
            top: 274.7900085449219px;
            left: 70.489990234375px;
            width: 34px;
            height: 34px;
            position: absolute;
          }
          .home-vector1040 {
            top: 274.4700012207031px;
            left: 113.05999755859375px;
            width: 34px;
            height: 34px;
            position: absolute;
          }
          .home-vector1041 {
            top: 274.1600036621094px;
            left: 155.6300048828125px;
            width: 34px;
            height: 34px;
            position: absolute;
          }
          .home-vector1042 {
            top: 283.6499938964844px;
            left: 36.44999694824219px;
            width: 17px;
            height: 17px;
            position: absolute;
          }
          .home-vector1043 {
            top: 356.3787841796875px;
            left: 122.16998291015625px;
            width: 17px;
            height: 17px;
            position: absolute;
          }
          .home-vector1044 {
            top: 361.0947570800781px;
            left: 126.6287841796875px;
            width: 8px;
            height: 8px;
            position: absolute;
          }
          .home-vector1045 {
            top: 358.52203369140625px;
            left: 37.15692138671875px;
            width: 16px;
            height: 15px;
            position: absolute;
          }
          .home-vector1046 {
            top: 360.6499938964844px;
            left: 177.04998779296875px;
            width: 2px;
            height: 2px;
            position: absolute;
          }
          .home-vector1047 {
            top: 361.6399841308594px;
            left: 169.42001342773438px;
            width: 8px;
            height: 8px;
            position: absolute;
          }
          .home-vector1048 {
            top: 357.6099853515625px;
            left: 165.02999877929688px;
            width: 17px;
            height: 17px;
            position: absolute;
          }
          .home-vector1049 {
            top: 357.4800109863281px;
            left: 79.2537841796875px;
            width: 17px;
            height: 17px;
            position: absolute;
          }
          .home-vector1050 {
            top: 131.5699920654297px;
            left: 39.58000183105469px;
            width: 72px;
            height: 1px;
            position: absolute;
          }
          .home-vector1051 {
            top: 283.67156982421875px;
            left: 80.40800476074219px;
            width: 14px;
            height: 16px;
            position: absolute;
          }
          .home-vector1052 {
            top: 285.4283447265625px;
            left: 119.86569213867188px;
            width: 22px;
            height: 12px;
            position: absolute;
          }
          .home-vector1053 {
            top: 295.7399597167969px;
            left: 172.85000610351562px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector1054 {
            top: 292.5623474121094px;
            left: 170.15103149414062px;
            width: 8px;
            height: 3px;
            position: absolute;
          }
          .home-vector1055 {
            top: 284.30963134765625px;
            left: 165.38375854492188px;
            width: 18px;
            height: 5px;
            position: absolute;
          }
          .home-vector1056 {
            top: 288.34619140625px;
            left: 167.29104614257812px;
            width: 14px;
            height: 4px;
            position: absolute;
          }
          .home-freepik-characterinject51 {
            top: 101.95954132080078px;
            left: 57.939998626708984px;
            width: 146.39999389648438px;
            height: 377.0104675292969px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector1057 {
            top: 344.15045166015625px;
            left: 39.8900032043457px;
            width: 41px;
            height: 33px;
            position: absolute;
          }
          .home-vector1058 {
            top: 363.45635986328125px;
            left: 46.03671646118164px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector1059 {
            top: 373.68048095703125px;
            left: 40.6400032043457px;
            width: 40px;
            height: 3px;
            position: absolute;
          }
          .home-vector1060 {
            top: 364.6145935058594px;
            left: 56.66921615600586px;
            width: 4px;
            height: 3px;
            position: absolute;
          }
          .home-vector1061 {
            top: 366.3740539550781px;
            left: 62.03981399536133px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector1062 {
            top: 368.0699157714844px;
            left: 66.88079833984375px;
            width: 2px;
            height: 3px;
            position: absolute;
          }
          .home-vector1063 {
            top: 359.3157958984375px;
            left: 55.72450637817383px;
            width: 4px;
            height: 1px;
            position: absolute;
          }
          .home-vector1064 {
            top: 319.5104675292969px;
            left: 0.01000213623046875px;
            width: 37px;
            height: 51px;
            position: absolute;
          }
          .home-vector1065 {
            top: 338.2352294921875px;
            left: 11.689037322998047px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector1066 {
            top: 341.4504699707031px;
            left: 0px;
            width: 31px;
            height: 29px;
            position: absolute;
          }
          .home-vector1067 {
            top: 346.9718017578125px;
            left: 18.485393524169922px;
            width: 4px;
            height: 1px;
            position: absolute;
          }
          .home-vector1068 {
            top: 351.7587585449219px;
            left: 20.771312713623047px;
            width: 4px;
            height: 1px;
            position: absolute;
          }
          .home-vector1069 {
            top: 356.1284484863281px;
            left: 23.08907699584961px;
            width: 3px;
            height: 2px;
            position: absolute;
          }
          .home-vector1070 {
            top: 341.8200378417969px;
            left: 22.368701934814453px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector1071 {
            top: 118.28046417236328px;
            left: 98.52000427246094px;
            width: 28px;
            height: 26px;
            position: absolute;
          }
          .home-vector1072 {
            top: 91.77239227294922px;
            left: 109.30000305175781px;
            width: 37px;
            height: 25px;
            position: absolute;
          }
          .home-vector1073 {
            top: 94.81636810302734px;
            left: 139.26109313964844px;
            width: 1px;
            height: 1px;
            position: absolute;
          }
          .home-vector1074 {
            top: 92.65166473388672px;
            left: 110.97000122070312px;
            width: 35px;
            height: 21px;
            position: absolute;
          }
          .home-vector1075 {
            top: 98.66300201416016px;
            left: 113.25358581542969px;
            width: 25px;
            height: 25px;
            position: absolute;
          }
          .home-vector1076 {
            top: 118.23046112060547px;
            left: 116.51107788085938px;
            width: 9px;
            height: 5px;
            position: absolute;
          }
          .home-vector1077 {
            top: 116.72551727294922px;
            left: 121.70506286621094px;
            width: 3px;
            height: 4px;
            position: absolute;
          }
          .home-vector1078 {
            top: 112.72774505615234px;
            left: 126.24917602539062px;
            width: 3px;
            height: 4px;
            position: absolute;
          }
          .home-vector1079 {
            top: 108.86319732666016px;
            left: 130.9499969482422px;
            width: 2px;
            height: 5px;
            position: absolute;
          }
          .home-vector1080 {
            top: 7.429649353027344px;
            left: 69.08924865722656px;
            width: 37px;
            height: 87px;
            position: absolute;
          }
          .home-vector1081 {
            top: 58.17046356201172px;
            left: 80.75px;
            width: 13px;
            height: 8px;
            position: absolute;
          }
          .home-vector1082 {
            top: 33.85985565185547px;
            left: 99.23995971679688px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector1083 {
            top: 29.42902374267578px;
            left: 97.32060241699219px;
            width: 6px;
            height: 2px;
            position: absolute;
          }
          .home-vector1084 {
            top: 33.53990936279297px;
            left: 84.51997375488281px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .home-vector1085 {
            top: 28.74022674560547px;
            left: 81.51612854003906px;
            width: 6px;
            height: 2px;
            position: absolute;
          }
          .home-vector1086 {
            top: 29.81995391845703px;
            left: 92.38999938964844px;
            width: 4px;
            height: 14px;
            position: absolute;
          }
          .home-vector1087 {
            top: 22.5244140625px;
            left: 80.36102294921875px;
            width: 7px;
            height: 2px;
            position: absolute;
          }
          .home-vector1088 {
            top: 25.568527221679688px;
            left: 96.64849853515625px;
            width: 7px;
            height: 2px;
            position: absolute;
          }
          .home-vector1089 {
            top: 34.799034118652344px;
            left: 62.640995025634766px;
            width: 7px;
            height: 11px;
            position: absolute;
          }
          .home-vector1090 {
            top: 37.095314025878906px;
            left: 64.49000549316406px;
            width: 3px;
            height: 6px;
            position: absolute;
          }
          .home-vector1091 {
            top: 44.038124084472656px;
            left: 87.83709716796875px;
            width: 4px;
            height: 5px;
            position: absolute;
          }
          .home-vector1092 {
            top: 167.41046142578125px;
            left: 31.240001678466797px;
            width: 51px;
            height: 192px;
            position: absolute;
          }
          .home-vector1093 {
            top: 167.970458984375px;
            left: 9.34000015258789px;
            width: 85px;
            height: 175px;
            position: absolute;
          }
          .home-vector1094 {
            top: 198.69046020507812px;
            left: 65.08218383789062px;
            width: 13px;
            height: 110px;
            position: absolute;
          }
          .home-vector1095 {
            top: 252.04046630859375px;
            left: 36.150394439697266px;
            width: 2px;
            height: 93px;
            position: absolute;
          }
          .home-vector1096 {
            top: 196.61538696289062px;
            left: 42.5993766784668px;
            width: 19px;
            height: 10px;
            position: absolute;
          }
          .home-vector1097 {
            top: 121.04045867919922px;
            left: 94.33660888671875px;
            width: 26px;
            height: 35px;
            position: absolute;
          }
          .home-vector1098 {
            top: 58.450462341308594px;
            left: 31.10000228881836px;
            width: 68px;
            height: 136px;
            position: absolute;
          }
          .home-vector1099 {
            top: 70.2504653930664px;
            left: 26.507915496826172px;
            width: 33px;
            height: 116px;
            position: absolute;
          }
          .home-vector1100 {
            top: 180.93649291992188px;
            left: 43.873233795166016px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .home-vector1101 {
            top: 70.26045989990234px;
            left: 26.288890838623047px;
            width: 33px;
            height: 116px;
            position: absolute;
          }
          .home-vector1102 {
            top: 66.72045135498047px;
            left: 66.41999816894531px;
            width: 26px;
            height: 22px;
            position: absolute;
          }
          .home-vector1103 {
            top: 78.66045379638672px;
            left: 93.06166076660156px;
            width: 4px;
            height: 9px;
            position: absolute;
          }
          .home-vector1104 {
            top: 80.2404556274414px;
            left: 85.47010803222656px;
            width: 8px;
            height: 100px;
            position: absolute;
          }
          .home-vector1105 {
            top: 102.64046478271484px;
            left: 95.99345397949219px;
            width: 4px;
            height: 57px;
            position: absolute;
          }
          .home-vector1106 {
            top: 73.43451690673828px;
            left: 49.559940338134766px;
            width: 13px;
            height: 14px;
            position: absolute;
          }
          .home-group56 {
            top: 125.83045196533203px;
            left: 96.6300048828125px;
            width: 3.180159330368042px;
            height: 30.000015258789062px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector1107 {
            top: 0px;
            left: 0px;
            width: 3px;
            height: 30px;
            position: absolute;
          }
          .home-group57 {
            top: 101.2004623413086px;
            left: 51.379276275634766px;
            width: 10.580728530883789px;
            height: 85.04998779296875px;
            display: flex;
            opacity: 0.3;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector1108 {
            top: 0px;
            left: 0px;
            width: 11px;
            height: 85px;
            position: absolute;
          }
          .home-vector1109 {
            top: 0px;
            left: 61.68271255493164px;
            width: 52px;
            height: 38px;
            position: absolute;
          }
          .home-vector1110 {
            top: 115.01947784423828px;
            left: 30.09994888305664px;
            width: 25px;
            height: 7px;
            position: absolute;
          }
          .home-vector1111 {
            top: 75.9404525756836px;
            left: 33.971744537353516px;
            width: 14px;
            height: 109px;
            position: absolute;
          }
          .home-vector1112 {
            top: 154.42047119140625px;
            left: 31.22000503540039px;
            width: 22px;
            height: 4px;
            position: absolute;
          }
          .home-vector1113 {
            top: 80.1172866821289px;
            left: 38.810001373291016px;
            width: 23px;
            height: 11px;
            position: absolute;
          }
          .home-vector1114 {
            top: 68.17046356201172px;
            left: 58.08982467651367px;
            width: 14px;
            height: 120px;
            position: absolute;
          }
          .home-vector1115 {
            top: 160.21047973632812px;
            left: 54.86000442504883px;
            width: 32px;
            height: 7px;
            position: absolute;
          }
          .home-vector1116 {
            top: 128.16619873046875px;
            left: 53.309993743896484px;
            width: 36px;
            height: 3px;
            position: absolute;
          }
          .home-vector1117 {
            top: 99.07479095458984px;
            left: 58.79999923706055px;
            width: 33px;
            height: 1px;
            position: absolute;
          }
          .home-vector1118 {
            top: 69.82295989990234px;
            left: 54.630001068115234px;
            width: 16px;
            height: 5px;
            position: absolute;
          }
          .home-vector1119 {
            top: 60.84046173095703px;
            left: 67.43000793457031px;
            width: 23px;
            height: 20px;
            position: absolute;
          }
          .home-vector1120 {
            top: 70.34046173095703px;
            left: 77.50999450683594px;
            width: 6px;
            height: 7px;
            position: absolute;
          }
          .home-vector1121 {
            top: 99.19591522216797px;
            left: 92.30999755859375px;
            width: 7px;
            height: 1px;
            position: absolute;
          }
          .home-vector1122 {
            top: 132.84371948242188px;
            left: 89.83000183105469px;
            width: 7px;
            height: 1px;
            position: absolute;
          }
          .home-vector1123 {
            top: 87.81046295166016px;
            left: 91.62777709960938px;
            width: 5px;
            height: 106px;
            position: absolute;
          }
          .home-vector1124 {
            top: 166.5904541015625px;
            left: 86.61000061035156px;
            width: 10px;
            height: 2px;
            position: absolute;
          }
          .home-vector1125 {
            top: 127.10045623779297px;
            left: 97.44000244140625px;
            width: 18px;
            height: 12px;
            position: absolute;
          }
          .home-vector1126 {
            top: 125.04045867919922px;
            left: 102.11000061035156px;
            width: 10px;
            height: 15px;
            position: absolute;
          }
          .home-freepik-floorinject51 {
            top: 478.1000061035156px;
            left: 37.470001220703125px;
            width: 425.05999755859375px;
            height: 0.519989013671875px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-vector1127 {
            top: 0px;
            left: 0px;
            width: 425px;
            height: 1px;
            position: absolute;
          }
          .home-h2tg695h5 {
            top: 6521px;
            left: 98px;
            width: 640px;
            height: 88px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-frame5 {
            top: -752px;
            left: 193.5302734375px;
            width: 0px;
            height: 52px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-group58 {
            top: 26px;
            left: 0px;
            width: 400px;
            height: 750px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .home-rectangle10050 {
            top: 6521px;
            left: 0px;
            width: 1443px;
            height: 611px;
            position: absolute;
          }
          .home-div1wsqynx {
            top: 7444.08984375px;
            left: 73px;
            width: 1280px;
            height: 69.38999938964844px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(221, 221, 221, 1);
            border-style: solid;
            border-width: Symbol(figma.mixed) px;
          }
          .home-divar9stc {
            top: 205px;
            left: 0px;
            width: 1280px;
            height: 20.389999389648438px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-div1fx0lfx {
            top: -4px;
            left: -4px;
            width: 512px;
            height: 28.389999389648438px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-text167 {
            top: -565px;
            left: 4px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text169 {
            top: -565px;
            left: 132.169921875px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Book;
            text-align: center;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text170 {
            top: -565px;
            left: 145.31005859375px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text172 {
            top: -565px;
            left: 190.949951171875px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Book;
            text-align: center;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text173 {
            top: -565px;
            left: 204.090087890625px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text175 {
            top: -565px;
            left: 263.22998046875px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Book;
            text-align: center;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text176 {
            top: -565px;
            left: 276.3798828125px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text178 {
            top: -565px;
            left: 328.14013671875px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Book;
            text-align: center;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text179 {
            top: -565px;
            left: 341.280029296875px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-divjro6t0 {
            gap: 24px;
            top: -570px;
            left: 1148.18994140625px;
            width: 307px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .home-divjro6t01 {
            gap: 15.989997863769531px;
            display: flex;
            padding: 0 0 2.3899993896484375px 0;
            align-items: flex-start;
          }
          .home-button1az8yk66 {
            gap: 8px;
            display: flex;
            padding: 0 0.0500030517578125px 0 0;
            align-items: center;
          }
          .home-svg {
            width: 16px;
            height: 16px;
          }
          .home-text181 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: center;
            font-family: Circular Std;
            font-weight: 500;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-button1az8yk661 {
            gap: 9.329999923706055px;
            display: flex;
            padding: 0 0.4400005340576172px 0 0;
            align-items: flex-start;
          }
          .home-text183 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: SemiBold;
            text-align: center;
            font-family: Roboto;
            font-weight: 600;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text184 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: center;
            font-family: Circular Std;
            font-weight: 500;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-ul115qwnm {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .home-navigateto-facebook {
            width: 18px;
            height: 18px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-frame6 {
            top: 0px;
            left: 0px;
            width: 18px;
            height: 18px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-navigateto-twitter {
            width: 18px;
            height: 18px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-frame7 {
            top: 0px;
            left: 0px;
            width: 18px;
            height: 18px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-navigateto-instagram {
            width: 18px;
            height: 18px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-frame8 {
            top: 0px;
            left: 0px;
            width: 18px;
            height: 18px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .home-text186 {
            top: -477.08984375px;
            left: 87px;
            color: rgba(255, 255, 255, 1);
            width: 1120px;
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Book;
            text-align: center;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-line1 {
            top: 7065px;
            left: 0px;
            width: 1440px;
            height: 1px;
            position: absolute;
          }
          .home-line2 {
            top: 6886px;
            left: 0px;
            width: 1440px;
            height: 1px;
            position: absolute;
          }
          .home-section1l3ys1i {
            gap: 24px;
            top: 6673px;
            left: 128px;
            width: 393px;
            display: flex;
            padding: 0 12px 0.0300140380859375px 12px;
            position: absolute;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text188 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-ulyuolfv {
            gap: 18.009998321533203px;
            display: flex;
            padding: 1px 88px 1.0099945068359375px 0;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text190 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text192 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text194 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text196 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-section1l3ys1i1 {
            gap: 24px;
            top: 6673px;
            left: 454px;
            width: 338px;
            display: flex;
            padding: 0 12px 144.05999755859375px 12px;
            position: absolute;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text198 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-ulyuolfv1 {
            gap: 18.009998321533203px;
            display: flex;
            padding: 1px 92px 1.0200004577636719px 0;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text200 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text202 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-section1l3ys1i2 {
            gap: 24px;
            top: 6673px;
            left: 780px;
            width: 381px;
            display: flex;
            padding: 0 12px 0.0300140380859375px 12px;
            position: absolute;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text204 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-ulyuolfv2 {
            gap: 18.009998321533203px;
            display: flex;
            padding: 1px 135px 1.0099945068359375px 0;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text206 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text208 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text210 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text212 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-section1l3ys1i3 {
            gap: 24px;
            top: 7243px;
            left: 1106px;
            width: 389px;
            display: flex;
            padding: 0 12px 0.0300140380859375px 12px;
            position: absolute;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text214 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-ulyuolfv3 {
            gap: 18.009998321533203px;
            display: flex;
            padding: 1px 143px 1.0099945068359375px 0;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text216 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text218 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text220 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text222 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-rectangle10142 {
            top: 6024px;
            left: 181px;
            width: 1078px;
            height: 435px;
            position: absolute;
            border-color: rgba(0, 0, 0, 0.1599999964237213);
            border-style: solid;
            border-width: 1px;
            border-radius: 6px;
          }
          .home-text224 {
            top: 6067px;
            left: 615px;
            color: rgba(30, 30, 45, 1);
            height: auto;
            position: absolute;
            font-size: 40px;
            font-style: Bold;
            text-align: left;
            font-family: Circular Std;
            font-weight: 700;
            line-height: 17.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text226 {
            top: 6115px;
            left: 313px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text228 {
            top: 6225px;
            left: 313px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text230 {
            top: 6115px;
            left: 803px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Book;
            text-align: left;
            font-family: Circular Std;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-rectangle10112 {
            top: 6144px;
            left: 313px;
            width: 323px;
            height: 47px;
            position: absolute;
            border-color: rgba(0, 0, 0, 0.17000000178813934);
            border-style: solid;
            border-width: 1px;
            border-radius: 2px;
          }
          .home-rectangle10144 {
            top: 6254px;
            left: 313px;
            width: 813px;
            height: 111px;
            position: absolute;
            border-color: rgba(0, 0, 0, 0.17000000178813934);
            border-style: solid;
            border-width: 1px;
            border-radius: 2px;
          }
          .home-rectangle10143 {
            top: 6144px;
            left: 803px;
            width: 323px;
            height: 47px;
            position: absolute;
            border-color: rgba(0, 0, 0, 0.17000000178813934);
            border-style: solid;
            border-width: 1px;
            border-radius: 2px;
          }
          .submit-button {
            top: 6404px;
            left: 803px;
            background-color:red;
            width: 123px;
            height: 47px;
            color:white;
            position: absolute;
            border-color: rgba(0, 0, 0, 0.17000000178813934);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
          }
        `}
      </style>
    </>
  )
}

export default Homee
