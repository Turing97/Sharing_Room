var mongo=require("mongodb");
var MongoClient = mongo.MongoClient;
var assert = require('assert');
var url = require('url');
var host="localhost";
var port="27017";
var Urls = 'mongodb://localhost:27017/sharing_room';

//文章信息
//查询所有文章信息
var findAllArticles = function(db,collections,selector,fn) {
    var collection = db.collection(collections)
    collection.find(selector).toArray(function(err, result) {
        try{
            assert.equal(err, null);
        }catch(e){
            console.log(e);
            result = []
        }
        fn(result)
        db.close;
    });
}
//表格信息
//暂时插入一条表格数据
var addChartData = function(db,collections,selector,fn){
    var collection = db.collection(collections);
    collection.insertMany([selector],function(err,result){
      try{
          assert.equal(err,null)
          }catch(e){
        console.log(e);
        result = [];
      };
      
      fn(result);
      db.close();
    });
  }
//查询一条表格数据
var findChartData = function(db,collections,selector,fn){
    //collections="hashtable";
    var collection = db.collection(collections);
    
      collection.find(selector).toArray(function(err,result){
        //console.log(docs);
        try{
          assert.equal(err,null);
        }catch(e){
          console.log(e);
          result = [];
        }
        
        fn(result);
        db.close();
      });
  
  }




   var mongo = require("mongodb"); //引入mongodb模块
 var assert = require("assert"); //引入断言模块
 
 var MongoClient = mongo.MongoClient;  //开启服务
 
