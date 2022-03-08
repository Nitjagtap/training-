class Controller {
    static async controller(req,res){
        try{
            res.send("Testing")
        }catch(e){

        }
    }

    static async controller2(req,res){
        try{
            res.send("Testing with controller TWO")
        }catch(e){

        }
    }
    static async controller3(req,res){
        try{
            res.send("Testing with controller THREE")
        }catch(e){

        }
    }
    static async controller4(req,res){
        try{
            res.send("Testing with controller FOUR")
        }catch(e){

        }
    }
    static async controller5(req,res){
        try{
            res.send("Testing with controller FIVE")
        }catch(e){

        }
    }
    static async controller6(req,res){
        try{
            res.send("Testing with controller SIX")
        }catch(e){

        }
    }
}

module.exports=Controller