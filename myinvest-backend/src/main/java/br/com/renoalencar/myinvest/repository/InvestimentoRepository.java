package br.com.renoalencar.myinvest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.renoalencar.myinvest.domain.Investimento;

public interface InvestimentoRepository extends JpaRepository<Investimento, Long> {
	
}
