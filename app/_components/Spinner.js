function Spinner() {
  return <div id="spinner-container" className="space-y-10">
    <div className="flex justify-center space-x-1">
      <div className="w-4 h-4 bg-blue-500
                  rounded-full animate-bounce">
      </div>
      <div className="w-4 h-4 bg-blue-500
                  rounded-full animate-bounce
                  delay-100">
      </div>
      <div className="w-4 h-4 bg-blue-500
                  rounded-full animate-bounce
                  delay-200">
      </div>
    </div>


  </div>
}

export default Spinner;
