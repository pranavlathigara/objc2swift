class MyClassControll : NSObject, SomeProtocol {

    @IBOutlet  var label:UILabel!

    func fuga() {
        var a: Int32 = 0
        var b: Int32 = 0
        if a == 0 {
            b = a * b - 1 / a
        }

        if a > 2 {
            b = 2
        }

        if a <= 1 {
            b = 3
        }

        if a && b {
            b = 1
        }

        switch a {
            case 0:
            b = 1
            
            case 1:
            b = 0
            
            default:
            b = 2
            
        }

        for a = 0; a < 10; a++ {
            b += 1
        }

        while a < 10 {
            ++a
        }

        do {
            b++
        } while b < 10

        for str: NSString in array {
            NSLog (str) 
        }

        for var i = 0; i < 10; i++ {
            for var j = 0, k = 1; j < 5; j++ {
                foo = self.hoge()
            }

        }


    }



}