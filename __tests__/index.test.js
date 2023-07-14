const {sum} = require('./index')

test(
  // parameter untuk deskripsi
  "Make sure that 1 + 1 = 2",
  // parameter untuk testing yang sebenarnya
  () => {
    expect(
      // expect hasil dari function/value yang kita jalankan di bawah ini
      // misalkan sum(1, 1) ==> 1 + 1
      sum(1, 1)
    )
    // toBe sama dengan nilai yang kita harapkan, yaitu 2
    .toBe(2)
  }
)