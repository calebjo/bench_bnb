class Api::BenchesController < ApplicationController
    def create
        @bench = bench.new(bench_params)
        @bench.save
    end
    
    def show
        @bench = Bench.find(params[:id])
    end

    def index
        @benches = Bench.all
    end
    
    private
    
    def bench_params
        params.require(:bench).permit(:description, :lat, :lng)
    end
end
