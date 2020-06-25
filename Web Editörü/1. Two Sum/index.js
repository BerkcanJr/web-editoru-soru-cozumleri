var twoSum = function (nums, target) {
    //Çıktı için istenen diziyi oluşturuyoruz.
    let result = [];
  
    //Daha sonra dizinin her bir elemanına bakıyoruz.
    nums.map((value, index) => {
      //Hedef sayıdan mevcut sayıyı çıkartarak dize içerisinde hangi sırada bulunduğunu buluyoruz.
      const calculated = nums.indexOf((target - value));
  
      //Eğer bulduğumuz dizi numarası -1'den büyükse yani dize'nin uzunluğunun altında kalmıyorsa bu benim için bir geçerli sonuçtur.
      if (calculated > -1) {
        result[0] = index;
        result[1] = calculated;
        return true;
      }
  
    });
  
    return result;
  };
  