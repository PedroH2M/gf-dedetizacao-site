import styles from "./page.module.css";
import Image from "next/image";
import { Bug, Rat, Droplets, Phone, Zap, Skull, ShieldAlert } from "lucide-react";

export default function Home() {
  return (
    <>
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
          <Image 
            src="/hero_bg.jpg" 
            alt="GF Dedetização Background" 
            fill 
            className={styles.heroBgImage} 
            priority
          />
          <div className={styles.heroOverlay}></div>
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroText}>
              <div className={styles.badge}>
                <Zap size={16} color="var(--primary)" />
                <span>Especialistas no Controle de Pragas</span>
              </div>
              <h1 className={styles.title}>
                O Fim das Pragas. <br/>
                <span className="text-primary-gradient">A Sua Paz.</span>
              </h1>
              <p className={styles.description}>
                Nós eliminamos o problema pela raiz. Métodos seguros, tecnologia de ponta e garantia de um ambiente livre de insetos e roedores.
              </p>
              <div className={styles.heroActions}>
                <a href="https://wa.me/5583988069060?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita." className="btn btn-accent" target="_blank" rel="noreferrer">
                  Chamar no WhatsApp
                </a>
                <a href="#alvos" className={`btn ${styles.btnOutline}`}>
                  Ver Nossos Alvos
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Alvos (Mirando as pragas igual a logo) */}
        <section id="alvos" className={styles.alvosSection}>
          <div className={`container`}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Alvos Eliminados</h2>
              <p className={styles.sectionSubtitle}>Nenhuma praga sobrevive. Focamos diretamente na ameaça.</p>
            </div>
            
            <div className={styles.alvosGrid}>
              {[
                { name: "Baratas", icon: Bug },
                { name: "Ratos", icon: Rat },
                { name: "Escorpiões", icon: ShieldAlert },
                { name: "Formigas", icon: Bug },
                { name: "Cupins", icon: Skull },
              ].map((alvo, i) => (
                <div key={i} className={styles.targetWrapper}>
                  <div className={styles.targetIcon}>
                    <alvo.icon size={45} />
                  </div>
                  <span className={styles.targetName}>{alvo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços Detalhados com Imagens Geradas */}
        <section id="servicos" className={`container ${styles.servicesSection}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Serviços Premium</h2>
          </div>

          <div className={styles.serviceRow}>
            <div className={styles.serviceImageWrapper}>
              <Image src="/service_dedetizacao.jpg" alt="Dedetização Profissional" width={600} height={450} className={styles.serviceImage} />
            </div>
            <div className={styles.serviceContent}>
              <h3 className="text-primary-gradient">Dedetização e Desratização</h3>
              <p>Utilizamos produtos de uso restrito a profissionais que eliminam formigas, baratas, mosquitos, ratos, escorpiões e aranhas sem deixar cheiro ou manchar seus móveis.</p>
              <ul className={styles.serviceList}>
                <li>Ação rápida e efeito de longa duração</li>
                <li>Processo seguro para crianças e pets</li>
                <li>Equipe técnica altamente qualificada</li>
              </ul>
            </div>
          </div>

          <div className={`${styles.serviceRow} ${styles.reverse}`}>
            <div className={styles.serviceImageWrapper}>
              <Image src="/service_cupim.jpg" alt="Descupinização e Tratamento de Madeira" width={600} height={450} className={styles.serviceImage} />
            </div>
            <div className={styles.serviceContent}>
              <h3 className="text-primary-gradient">Tratamento de Madeira (Cupins)</h3>
              <p>Tratamento profundo para madeiras e estruturas. Criamos uma barreira química impenetrável que não só elimina a colônia existente, mas previne futuras infestações no seu patrimônio.</p>
              <ul className={styles.serviceList}>
                <li>Injeção e pulverização localizada</li>
                <li>Preservação total da sua mobília</li>
                <li>Proteção contínua contra brocas e cupins</li>
              </ul>
            </div>
          </div>

          <div className={styles.serviceRow}>
            <div className={styles.serviceImageWrapper}>
              <Image src="/service_agua.jpg" alt="Limpeza de Caixa D'água" width={600} height={450} className={styles.serviceImage} />
            </div>
            <div className={styles.serviceContent}>
              <h3 className="text-primary-gradient">Limpeza de Caixa D'água</h3>
              <p>A água pura é essencial para a saúde. Realizamos a desinfecção e higienização completa dos reservatórios, removendo lodo, bactérias e prevenindo a proliferação de mosquitos da dengue.</p>
              <ul className={styles.serviceList}>
                <li>Remoção total de sujeiras e resíduos</li>
                <li>Padrões rigorosos de higiene</li>
                <li>Certificado técnico de limpeza</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
