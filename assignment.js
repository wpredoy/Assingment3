        function feetToMile(mile) {
            var feet = 5280;

            var convert = mile/feet;

             return convert;
             }
        var result = feetToMile(500);

     console.log("Feet to:", result , "mile");



     function woodCalculator(chair, tabel, bed) {

          var chirCount = chair * chair * chair;
        
       var tabelCount = tabel*tabel*tabel;
        
          var bedCount = bed *bed * bed;
        
           var total = chirCount + tabelCount + bedCount;
        
          return total;
       }
       var result = woodCalculator(1, 3, 5);

       console.log("1 ta chair , 1 ta tabel, 1 ta bed batane: ",result,"cubic wood lagbe");





       function tinyFriend(names) {

          var shortName = names[0];
        
             for( var i = 0; i<names.length; i++) {
               var currentName = names[i];
               if(currentName.length < shortName.length) {
                 shortName = currentName;
              }
           }
            return shortName;
         }
        
        
      var shortName = tinyFriend(["asif","akash","sumon","ashad","sohana","ria"]);
      
        console.log(shortName);