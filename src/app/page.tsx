import styles from "./page.module.css";
import { ShieldCheck, Bug, Droplets, Phone, Zap } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <div className={styles.logo}>
            <span className={styles.logoGf}>GF</span>
            <span className={styles.logoText}>Dedetização</span>
          </div>
          <a href="https://wa.me/5583988069060?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." className="btn btn-primary" target="_blank" rel="noreferrer">
            <Phone size={20} />
            Orçamento
          </a>
        </div>
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroText}>
              <div className={styles.badge}>
                <Zap size={16} color="var(--primary)" />
                <span>Atendimento Rápido e Seguro</span>
              </div>
              <h1 className={styles.title}>
                Proteção Absoluta contra <br/>
                <span className="text-primary-gradient">Pragas Urbanas</span>
              </h1>
              <p className={styles.description}>
                Segurança para sua família e empresa. Serviços especializados de dedetização, desratização e descupinização na sua região.
              </p>
              <div className={styles.heroActions}>
                <a href="https://wa.me/5583988069060?text=Ol%C3%A1%2C%20preciso%20de%20uma%20dedetiza%C3%A7%C3%A3o%20urgente." className="btn btn-primary" target="_blank" rel="noreferrer">
                  Solicitar Visita Técnica
                </a>
                <a href="#servicos" className={`btn ${styles.btnOutline}`}>
                  Ver Serviços
                </a>
              </div>
            </div>
            
            <div className={styles.heroVisual}>
              <div className={`glass ${styles.floatCard} ${styles.card1}`}>
                <ShieldCheck size={32} color="var(--primary)" />
                <div>
                  <strong>100% Garantido</strong>
                  <p>Produtos seguros</p>
                </div>
              </div>
              <div className={`glass ${styles.floatCard} ${styles.card2}`}>
                <Bug size={32} color="var(--accent)" />
                <div>
                  <strong>Fim dos Insetos</strong>
                  <p>Resultado Imediato</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className={`container ${styles.servicesSection}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
            <p className={styles.sectionSubtitle}>Especialistas no combate a todas as pragas urbanas.</p>
          </div>
          <div className={styles.grid}>
            {[
              { title: "Dedetização", desc: "Controle geral de insetos rasteiros e voadores: formigas, baratas, aranhas e escorpiões.", icon: Bug },
              { title: "Desratização", desc: "Erradicação e controle seguro de roedores (ratos, camundongos e ratazanas).", icon: ShieldCheck },
              { title: "Descupinização", desc: "Tratamento profundo contra cupins em móveis e estruturas de madeira.", icon: Zap },
              { title: "Limpeza de Caixa D'água", desc: "Higienização e desinfecção completa para garantir água pura e segura.", icon: Droplets },
            ].map((srv, i) => (
              <div key={i} className={`glass ${styles.card}`}>
                <div className={styles.cardIcon}>
                  <srv.icon size={28} />
                </div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
