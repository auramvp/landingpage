
import React, { useState } from 'react';
import { Check, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
  {
    name: "Gratuito",
    subtitle: "Início Ágil",
    monthlyPrice: "0",
    annualPrice: "0",
    description: "Para empresas que querem começar a organizar o almoxarifado.",
    features: [
      "até 50 itens",
      "1 usuário",
      "1 almoxarifado",
      "cadastro de itens",
      "entrada e saída de materiais",
      "histórico básico de movimentações",
      "dashboard simples"
    ],
    buttonText: "Começar Grátis",
    links: {
      monthly: "https://app.auraalmoxarifado.com.br/#/?flow=onboarding&plan=free",
      yearly: "https://app.auraalmoxarifado.com.br/#/?flow=onboarding&plan=free"
    },
    discount: "0%",
    popular: false
  },
  {
    name: "Starter",
    subtitle: "Pequenos Negócios",
    monthlyPrice: "29,90",
    annualPrice: "299,00",
    description: "Ideal para pequenas empresas que precisam controlar o consumo de materiais.",
    features: [
      "até 200 itens",
      "2 usuários",
      "1 almoxarifado",
      "cadastro completo de itens",
      "entrada e saída de materiais",
      "alerta de estoque mínimo",
      "histórico de movimentações",
      "dashboard básico"
    ],
    buttonText: "Assinar Agora",
    links: {
      monthly: "https://pay.auraalmoxarifado.com.br/?plan=starter&cycle=monthly",
      yearly: "https://pay.auraalmoxarifado.com.br/?plan=starter&cycle=yearly"
    },
    discount: "16%",
    popular: false
  },
  {
    name: "Pro",
    subtitle: "Mais Organização",
    monthlyPrice: "59,90",
    annualPrice: "599,00",
    description: "Para empresas que querem mais organização no controle de materiais.",
    features: [
      "até 500 itens",
      "3 usuários",
      "1 almoxarifado",
      "inventário de estoque",
      "relatórios de movimentação",
      "controle de responsáveis por retirada",
      "histórico completo de movimentações",
      "dashboard de consumo"
    ],
    buttonText: "Assinar Agora",
    links: {
      monthly: "https://pay.auraalmoxarifado.com.br/?plan=pro&cycle=monthly",
      yearly: "https://pay.auraalmoxarifado.com.br/?plan=pro&cycle=yearly"
    },
    discount: "16%",
    popular: true
  },
  {
    name: "Business",
    subtitle: "Operação Estruturada",
    monthlyPrice: "197",
    annualPrice: "1.970,00",
    description: "Para empresas com maior volume de materiais e operação estruturada.",
    features: [
      "até 1000 itens",
      "5 usuários",
      "1 almoxarifado",
      "inventário avançado",
      "relatórios completos",
      "exportação de relatórios",
      "controle de responsáveis por retirada",
      "histórico completo",
      "dashboard avançado"
    ],
    buttonText: "Assinar Agora",
    links: {
      monthly: "https://pay.auraalmoxarifado.com.br/?plan=business&cycle=monthly",
      yearly: "https://pay.auraalmoxarifado.com.br/?plan=business&cycle=yearly"
    },
    discount: "16%",
    popular: false
  },
];

const intelligencePlan = {
  name: "Intelligence",
  subtitle: "Poder da IA 💎",
  monthlyPrice: "497",
  annualPrice: "4.970,00",
  description: "Para empresas que precisam de gestão completa e inteligente de almoxarifado.",
  features: [
    "até 3000 itens",
    "usuários ilimitados",
    "múltiplos almoxarifados",
    "transferências entre almoxarifados",
    "confirmação de transferência com código",
    "dashboard avançado",
    "análise inteligente de consumo com IA",
    "sugestão de reposição automática",
    "alertas inteligentes",
    "suporte prioritário"
  ],
  buttonText: "Assinar Agora",
  links: {
    monthly: "https://pay.auraalmoxarifado.com.br/?plan=intelligence&cycle=monthly",
    yearly: "https://pay.auraalmoxarifado.com.br/?plan=intelligence&cycle=yearly"
  }
};

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="precos" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Planos e Preços</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">A ferramenta que se <br /><span className="text-gradient">paga logo no primeiro mês.</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed mb-10">
            Escolha hoje o plano que melhor se adapta à realidade da sua empresa e <span className="text-blue-400 font-bold whitespace-nowrap">teste grátis por 07 dias.</span>
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-bold transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-500'}`}>MENSAL</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-7 bg-white/10 rounded-full p-1 transition-colors hover:bg-white/20"
            >
              <motion.div
                animate={{ x: billingCycle === 'monthly' ? 0 : 28 }}
                className="w-5 h-5 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold transition-colors ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-500'}`}>ANUAL</span>
              <span className="bg-green-500/20 text-green-400 text-[10px] font-black px-2 py-0.5 rounded-full border border-green-500/30">
                ECONOMIZE ~16%
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-8">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative p-6 rounded-3xl border flex flex-col ${plan.popular
              ? 'bg-blue-600/10 border-blue-500/50 z-10 shadow-2xl shadow-blue-600/20'
              : 'bg-white/5 border-white/10'
              } transition-all duration-300 group`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                Mais Popular
              </div>
            )}

            <div className="mb-6">
              <div className="flex items-center gap-1 mb-1">
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-blue-300">{plan.subtitle}</span>
              </div>
              <p className="text-gray-400 text-[11px] leading-relaxed h-8 line-clamp-2">{plan.description}</p>
            </div>

            <div className="mb-6 h-12 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={billingCycle}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-baseline gap-0.5"
                >
                  <span className="text-gray-400 font-medium text-xs">R$</span>
                  <span className="text-3xl font-black text-white">
                    {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className="text-gray-500 text-[10px]">
                    {billingCycle === 'monthly' ? '/mês' : '/ano'}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            <ul className="space-y-2 mb-8 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[11px] text-gray-300">
                  <Check size={12} className="text-blue-500 shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            <motion.a
              key={billingCycle}
              href={billingCycle === 'monthly' ? plan.links.monthly : plan.links.yearly}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${plan.popular
                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
            >
              {plan.buttonText}
            </motion.a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-purple-600/20 border border-blue-500/30 rounded-3xl p-8 md:p-10 overflow-hidden group shadow-2xl shadow-blue-500/20"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] -mr-48 -mt-48 rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-[100px] -ml-32 -mb-32 rounded-full pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6 justify-center lg:justify-start">
              <h3 className="text-3xl md:text-4xl font-black text-white">{intelligencePlan.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-blue-500 text-white px-4 py-1.5 rounded-full font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-500/40">
                  Poder Máximo
                </span>
                <span className="text-lg">💎</span>
              </div>
            </div>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl leading-relaxed text-center lg:text-left">
              {intelligencePlan.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {intelligencePlan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-gray-200 font-medium">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-blue-400" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto text-center bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
            <div className="mb-8">
              <span className="text-sm text-blue-300 font-bold block mb-2 uppercase tracking-widest">Plano Intelligence</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={billingCycle}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-baseline justify-center gap-1"
                >
                  <span className="text-gray-400 font-bold text-xl">R$</span>
                  <span className="text-6xl font-black text-white tracking-tighter">
                    {billingCycle === 'monthly' ? intelligencePlan.monthlyPrice : intelligencePlan.annualPrice}
                  </span>
                  <span className="text-gray-500 font-medium">
                    {billingCycle === 'monthly' ? '/mês' : '/ano'}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
            <motion.a
              href={billingCycle === 'monthly' ? intelligencePlan.links.monthly : intelligencePlan.links.yearly}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full inline-flex items-center justify-center px-12 py-5 bg-white text-black hover:bg-blue-50 transition-all rounded-2xl font-black text-xl shadow-xl shadow-white/10"
            >
              Começar com IA
            </motion.a>
            <div className="mt-4 flex items-center justify-center gap-1 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
              <Info size={12} />
              Setup Inicial Incluso
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
