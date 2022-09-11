package com.devsuperior.dsmeta.services;

import com.devsuperior.dsmeta.entity.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;


@Service
public class SaleServices {
    @Autowired
    private SaleRepository repository;

//    public SaleServices(SaleRepository repository) {
//        this.repository = repository;
//    }

    public Page<Sale> findSales(String minDate,
                                String maxDate,
                                Pageable pageable){
        LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
//        LocalDate.parse(minDate);

        LocalDate min = minDate.equals("") ? today.minusYears(1) : LocalDate.parse(minDate);
        // If maxDate is empty, then max is today. Otherwise, max is the parsed maxDate.
        LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);
        return repository.findSales(min, max, pageable);
    }
}
