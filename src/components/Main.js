import React from "react";

import githubIcon from "../img/github-icon.svg";
import linkedinIcon from "../img/linkedin-icon.svg";
import telegramIcon from "../img/telegram-icon.svg";

import pCstic1 from "../img/projects/portal-cstic-1.png";
import pCstic2 from "../img/projects/portal-cstic-2.png";

import doaTec1 from "../img/projects/doatec-1.png";
import doaTec2 from "../img/projects/doatec-2.png";

import portalSTI1 from "../img/projects/portal-sti-1.png";
import portalSTI2 from "../img/projects/portal-sti-2.png";

function Main() {
  return (
    <main className="container">
      <section id="profile-section">
        <div className="row">
          <div className="col-12 col-lg-8 col-xl-8">
            <div className="section-initializer">
              <h2>
                Dev / <span className="blue-high">Profile</span>
              </h2>
              <div className="code-area">
                SELECT NAME, EMAIL, SOCIALS_URL, DESCRIPTION <br /> FROM
                <span className="yellow-high"> PROFILE</span>
              </div>
            </div>

            <div className="section-content blue-bg">
              <div className="profile-description mb-4">
                Olá! Sou desenvolvedor front-end e adoro criar aplicações
                limpas, escaláveis e com ótima experiência para os usuários e
                desenvolvedores. Também curto muito UI/UX Design e sua
                integração com o front-end! :)
              </div>
              <div className="d-lg-flex d-xl-flex align-items-end">
                <div className="profile-main mr-auto">
                  <div>
                    <h3 className="color-white">[Gabriel Mendes]</h3>
                    <div>mgmm@cin.ufpe.br</div>
                    <div className="mt-2">
                      <a
                        href="https://github.com/poesiabinaria"
                        target="_blank"
                      >
                        <img src={githubIcon} alt="Github" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/gabriel-mendes-macedo/"
                        target="_blank"
                      >
                        <img src={linkedinIcon} alt="LinkeIn" />
                      </a>
                      {/* <a href="https://web.telegram.org/#/im?p=@Gabriel_DIT" target="_blank">
                        <img src={telegramIcon} alt="Telegram" />
                      </a> */}
                    </div>
                  </div>
                </div>

                <div className="ul mt-3 mt-lg-0 mt-xl-0">
                  <li className="target">ReactJS</li>
                  <li className="target">PHP 7</li>
                  <li className="target">SASS</li>
                  <li className="target">UI/UX Design</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects-section">
        <div className="section-initializer">
          <h2>
            Dev / <span className="blue-high">Projects</span> / Featured
          </h2>
          <div className="code-area">
            SELECT ID, TITLE, DESCRIPTION, DATE, STACKS, URL_LIVE, IMG_URL
            <br />
            FROM <span className="yellow-high">PROJECTS</span> <br />
            WHERE IS_FEATURED = '1' <br />
            <span className="line-comment"> -- ORDER BY DATE DESC</span>
          </div>
        </div>

        <div className="section-content">
          <div className="item-project">
            <div className="counter-area small mb-2">
              P-ID <span className="target">01</span>
            </div>

            <div className="main-content-project">
              <div className="content-images">
                <div className="content-primary-img">
                  <div className="border-teste"></div>
                  <img className="primary-img" src={pCstic1} alt="" />
                </div>
                <div className="content-secondary-img">
                  <div className="border-teste"></div>
                  <img className="secondary-img" src={pCstic2} alt="" />
                </div>
              </div>

              <div className="content-box">
                <div className="box">
                  <div className="box-title">
                    <h3>Portal da Central de Serviços UFPE</h3>
                  </div>

                  <div className="box-main">
                    <div className="mb-2">
                      <div className="blue-high d-inline mr-3">WordPress</div>
                      <div className="blue-high d-inline mr-3">PHP 7</div>
                      <div className="blue-high d-inline mr-3">SASS</div>
                    </div>
                    <p>
                      O Portal da CSTIC da UFPE foi reconstruído para melhorar a
                      navegabilidade e adicionar novos recursos ao catálogo de
                      serviços.
                    </p>
                    <a
                      className="btn"
                      href="https://sites.ufpe.br/cstic/"
                      target="_blank"
                    >
                      Abrir projeto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item-project">
            <div className="counter-area small mb-2">
              P-ID <span className="target">02</span>
            </div>
            <div className="main-content-project">
              <div className="content-primary-img">
                <div className="border-teste"></div>
                <img className="primary-img" src={doaTec1} alt="" />
              </div>
              <div className="content-secondary-img">
                <div className="border-teste"></div>
                <img className="secondary-img" src={doaTec2} alt="" />
              </div>

              <div className="content-box">
                <div className="box">
                  <div className="box-title">
                    <h3>DoaTec</h3>
                  </div>

                  <div className="box-main">
                    <div className="mb-2">
                      <div className="blue-high d-inline mr-3">ReactJS</div>
                      <div className="blue-high d-inline mr-3">SASS</div>
                    </div>
                    <p>
                      Uma aplicação web desenvolvida para cadeira de Engenharia
                      de Software do Centro de Informática (UFPE). A ideia é
                      facilitar a doação de equipamentos eletrônicos para
                      instituições educativas, criando uma conexão entre doador
                      e instituição.
                    </p>
                    <a
                      className="btn"
                      href="http://ec2-18-216-242-153.us-east-2.compute.amazonaws.com:3000/"
                      target="_blank"
                    >
                      Abrir projeto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item-project">
            <div className="counter-area small mb-2">
              P-ID <span className="target">03</span>
            </div>
            <div className="main-content-project">
              <div className="content-primary-img">
                <div className="border-teste"></div>
                <img className="primary-img" src={portalSTI1} alt="" />
              </div>
              <div className="content-secondary-img">
                <div className="border-teste"></div>
                <img className="secondary-img" src={portalSTI2} alt="" />
              </div>

              <div className="content-box">
                <div className="box">
                  <div className="box-title">
                    <h3>Portal STI</h3>
                  </div>

                  <div className="box-main">
                    <div className="mb-2">
                      <div className="blue-high d-inline mr-3">WordPress</div>
                      <div className="blue-high d-inline mr-3">PHP 7</div>
                      <div className="blue-high d-inline mr-3">SASS</div>
                    </div>
                    <p>
                      O Portal NTI foi idealizado para seus colaboradores
                      internos. Seu principal papel é integrar cada membro ao
                      dia a dia do NTI para que seja possível uma experiência
                      mais rica, transparente e acolhedora para todos.
                    </p>
                    {/* <a
                      className="btn"
                      href="http://ec2-18-216-242-153.us-east-2.compute.amazonaws.com:3000/"
                      target="_blank"
                    >
                      Abrir projeto
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
