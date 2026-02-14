const revealTargets = document.querySelectorAll('.section-title, .text-block, .item, .entry, .edu-card, .work-card, .publication-card, .research-card, .scholar-panel, .about-copy, .lecture-collage, .contact-panel');
    revealTargets.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    revealTargets.forEach((el) => observer.observe(el));

    const scholarChartCanvas = document.getElementById('scholarCitationsChart');
    if (scholarChartCanvas && window.Chart) {
      new Chart(scholarChartCanvas, {
        type: 'bar',
        data: {
          labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
          datasets: [{
            data: [1, 0, 0, 5, 3, 2, 2],
            backgroundColor: '#6b7280',
            borderRadius: 2,
            maxBarThickness: 18
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: {
                color: '#64748b',
                font: { size: 11 }
              },
              border: { display: false }
            },
            y: {
              min: 0,
              max: 6,
              ticks: {
                stepSize: 3,
                color: '#64748b',
                font: { size: 11 }
              },
              grid: {
                color: 'rgba(100,116,139,0.25)'
              },
              border: { display: false }
            }
          }
        }
      });
    }
